const fs = require('fs');
const path = require('path');

// Configuration: Define which classes go into which module
const moduleConfigs = {
  grid: {
    output: 'app/styles/shared/grid.module.css',
    patterns: [
      /^\.container[\s\S]*?(?=\n\.|$)/gm,
      /^\.row[\s\S]*?(?=\n\.|$)/gm,
      /^\.col[\s\S]*?(?=\n\.|$)/gm,
    ],
    description: 'Grid system (container, row, col)'
  },
  utilities: {
    output: 'app/styles/shared/utilities.module.css',
    patterns: [
      /^\.u-[\w-]+[\s\S]*?(?=\n\.|$)/gm,
    ],
    description: 'Utility classes (u-*)'
  },
  typography: {
    output: 'app/styles/shared/typography.module.css',
    patterns: [
      /^\.h[1-6]\s*{[\s\S]*?^}/gm,
      /^\.eyebrow\s*{[\s\S]*?^}/gm,
    ],
    description: 'Typography (h1-h6, eyebrow)'
  },
  'components/sunport-solutions': {
    output: 'app/components/sunport-solutions.module.css',
    patterns: [
      /^\.home_product[\s\S]*?(?=\n\.|$)/gm,
      /^\.tab-[\w-]+[\s\S]*?(?=\n\.|$)/gm,
      /^\.tab_[\w-]+[\s\S]*?(?=\n\.|$)/gm,
    ],
    description: 'Sunport Solutions component'
  },
  'components/supplychain': {
    output: 'app/components/supplychain.module.css',
    patterns: [
      /^\.track\s*{[\s\S]*?^}/gm,
      /^\.track\.[\w-]+[\s\S]*?(?=\n\.|$)/gm,
    ],
    description: 'Supply Chain component'
  },
  'components/supplychain-background': {
    output: 'app/components/supplychain-components/supplychain-background.module.css',
    patterns: [
      /^\.tracks_[\w-]+[\s\S]*?(?=\n\.|$)/gm,
      /^\.track_[\w-]+[\s\S]*?(?=\n\.|$)/gm,
      /^\.green-bar[\s\S]*?(?=\n\.|$)/gm,
      /^\.red-bar[\s\S]*?(?=\n\.|$)/gm,
      /^\.supply-chain-svg[\s\S]*?(?=\n\.|$)/gm,
    ],
    description: 'Supply Chain Background component'
  }
};

async function extractCSSModules() {
  const sourceFile = path.join(__dirname, '../app/globals.css.backup');
  const source = fs.readFileSync(sourceFile, 'utf-8');

  console.log('🎨 Extracting CSS Modules from globals.css.backup...\n');

  // Also need to extract media queries for each module
  const mediaQueries = source.match(/@media[^{]+\{[\s\S]*?^\}/gm) || [];

  for (const [name, config] of Object.entries(moduleConfigs)) {
    let extractedCSS = [];

    // Extract matching CSS rules
    for (const pattern of config.patterns) {
      const matches = source.match(pattern) || [];
      extractedCSS.push(...matches);
    }

    // Find relevant media queries
    const relevantMediaQueries = mediaQueries.filter(mq => {
      // Check if this media query contains any of our class patterns
      return config.patterns.some(pattern => {
        const classNames = pattern.source.match(/\\\.[\\w-]+/g);
        if (!classNames) return false;
        return classNames.some(className => {
          const cleanName = className.replace(/\\\./g, '.').replace(/\\/g, '');
          return mq.includes(cleanName);
        });
      });
    });

    // Combine rules and media queries
    const content = [
      `/* ${config.description} */`,
      `/* Auto-generated from globals.css.backup */`,
      '',
      ...extractedCSS,
      '',
      ...relevantMediaQueries
    ].join('\n');

    // Ensure directory exists
    const outputPath = path.join(__dirname, '..', config.output);
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(outputPath, content);

    const lines = content.split('\n').length;
    const rulesCount = extractedCSS.length;
    const mqCount = relevantMediaQueries.length;

    console.log(`✅ ${name}`);
    console.log(`   ${config.output}`);
    console.log(`   ${lines} lines, ${rulesCount} rules, ${mqCount} media queries\n`);
  }

  console.log('✨ CSS Modules extraction complete!');
}

extractCSSModules().catch(console.error);
