const fs = require('fs');
const path = require('path');

// Class name patterns for each module
const moduleConfigs = {
  grid: {
    output: 'app/styles/shared/grid.module.css',
    classNames: ['container', 'row', 'col'],
    description: 'Grid system'
  },
  utilities: {
    output: 'app/styles/shared/utilities.module.css',
    classPrefixes: ['u-'],
    description: 'Utility classes'
  },
  typography: {
    output: 'app/styles/shared/typography.module.css',
    classNames: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'eyebrow'],
    description: 'Typography'
  },
  'sunport-solutions': {
    output: 'app/components/sunport-solutions.module.css',
    classNames: ['home_product'],
    classPrefixes: ['tab-', 'tab_'],
    description: 'Sunport Solutions'
  },
  'supplychain': {
    output: 'app/components/supplychain.module.css',
    classNames: ['track'],
    description: 'Supply Chain'
  },
  'supplychain-background': {
    output: 'app/components/supplychain-components/supplychain-background.module.css',
    classPrefixes: ['tracks_', 'track_', 'green-bar', 'red-bar'],
    classNames: ['supply-chain-svg'],
    description: 'Supply Chain Background'
  }
};

function parseCSS(cssContent) {
  const rules = [];
  const lines = cssContent.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Skip comments and empty lines
    if (line.startsWith('/*') || !line) {
      i++;
      continue;
    }

    // Check for selector (starts with . or @media)
    if (line.startsWith('@media')) {
      // Handle media query
      let mediaBlock = lines[i] + '\n';
      let braceDepth = (lines[i].match(/{/g) || []).length;
      i++;

      while (i < lines.length && braceDepth > 0) {
        mediaBlock += lines[i] + '\n';
        braceDepth += (lines[i].match(/{/g) || []).length;
        braceDepth -= (lines[i].match(/}/g) || []).length;
        i++;
      }

      rules.push({
        type: 'media',
        content: mediaBlock.trim(),
        selectors: [] // Will extract selectors later
      });
    } else if (line.startsWith('.')) {
      // Regular CSS rule
      const selector = line.substring(0, line.indexOf('{') || line.length).trim();
      let ruleContent = lines[i] + '\n';
      let braceDepth = (lines[i].match(/{/g) || []).length;
      braceDepth -= (lines[i].match(/}/g) || []).length;
      i++;

      while (i < lines.length && braceDepth > 0) {
        ruleContent += lines[i] + '\n';
        braceDepth += (lines[i].match(/{/g) || []).length;
        braceDepth -= (lines[i].match(/}/g) || []).length;
        i++;
      }

      rules.push({
        type: 'rule',
        selector,
        content: ruleContent.trim()
      });
    } else {
      i++;
    }
  }

  return rules;
}

function extractClassNames(selector) {
  const matches = selector.match(/\.[\w-]+/g) || [];
  return matches.map(m => m.substring(1));
}

function shouldIncludeRule(rule, config) {
  if (rule.type === 'media') {
    // Check if media query contains any matching classes
    const classes = extractClassNames(rule.content);
    return classes.some(cls => matchesConfig(cls, config));
  }

  const classes = extractClassNames(rule.selector);
  return classes.some(cls => matchesConfig(cls, config));
}

function matchesConfig(className, config) {
  // Check exact class names
  if (config.classNames && config.classNames.includes(className)) {
    return true;
  }

  // Check prefixes
  if (config.classPrefixes) {
    return config.classPrefixes.some(prefix => className.startsWith(prefix));
  }

  return false;
}

async function extractCSSModules() {
  const sourceFile = path.join(__dirname, '../app/globals.css.backup');
  const source = fs.readFileSync(sourceFile, 'utf-8');

  console.log('🎨 Extracting CSS Modules (proper parsing)...\n');

  // Parse all CSS rules
  const allRules = parseCSS(source);
  console.log(`📋 Parsed ${allRules.length} total CSS rules\n`);

  for (const [name, config] of Object.entries(moduleConfigs)) {
    // Filter rules for this module
    const matchingRules = allRules.filter(rule => shouldIncludeRule(rule, config));

    const content = [
      `/* ${config.description} */`,
      `/* Auto-generated from globals.css.backup */`,
      '',
      ...matchingRules.map(r => r.content),
      ''
    ].join('\n\n');

    // Ensure directory exists
    const outputPath = path.join(__dirname, '..', config.output);
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(outputPath, content);

    const lines = content.split('\n').length;
    console.log(`✅ ${name}`);
    console.log(`   Output: ${config.output}`);
    console.log(`   ${matchingRules.length} rules, ${lines} lines\n`);
  }

  console.log('✨ CSS Modules extraction complete!');
}

extractCSSModules().catch(console.error);
