const fs = require('fs');
const path = require('path');

// Read the entire CSS file
const sourceFile = path.join(__dirname, '../app/globals.css.backup');
const lines = fs.readFileSync(sourceFile, 'utf-8').split('\n');

// Helper to extract a CSS rule starting from a line
function extractRule(startLine) {
  let braceCount = 0;
  let currentLine = startLine - 1;
  let ruleLines = [];
  let foundStart = false;

  while (currentLine < lines.length) {
    const line = lines[currentLine];
    ruleLines.push(line);

    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;

    braceCount += openBraces - closeBraces;

    if (openBraces > 0) foundStart = true;
    if (foundStart && braceCount === 0) break;

    currentLine++;
  }

  return ruleLines.join('\n');
}

// Helper to extract multiple rules by their starting line numbers
function extractRules(lineNumbers) {
  return lineNumbers.map(line => extractRule(line)).join('\n\n');
}

// Helper to extract lines between start and end (inclusive)
function extractRange(startLine, endLine) {
  return lines.slice(startLine - 1, endLine).join('\n');
}

console.log('🎨 Extracting CSS Modules by line numbers...\n');

// 1. Grid Module
const gridCSS = `/* Grid system */
/* Auto-generated from globals.css.backup */

${extractRules([
  941,  // .section
  946,  // .container
  954,  // .container.cc-full
  958,  // .row
  965,  // .row.row-right
  969,  // .row.row-between
  973,  // .row.row-bottom
  977,  // .row.row-center-horizontal
  981,  // .row.row-center-vertical
  985,  // .row.row-around
  989,  // .row.row-no-gutters
  994,  // .row.u-vgap
  998,  // .col
  1004, // .col.col-lg-3
  1009, // .col.col-lg-6
  1014, // .col.col-lg-7
  1019, // .col.col-lg-2
  1024, // .col.col-lg-5
  1029, // .col.col-no-gutters
  1034, // .col.col-lg-9
  1039, // .col.col-lg-12
  1044, // .col.col-lg-11
  1049, // .col.col-lg-8
  1054, // .col.col-lg-4
  1059, // .col.col-lg-10
  1064, // .col.col-lg-1
  1069, // .col.col-shrink
  1073, // .col.col-lg-first
  1077, // .col.col-lg-last
  690,  // .w-container
  696,  // .w-container:before,.w-container:after
  702,  // .w-container:after
  706,  // .w-container .w-row
  911,  // .w-layout-blockcontainer
])}

/* Responsive Grid - Medium screens */
${extractRange(1785, 1990)}

/* Responsive Grid - Small screens */
${extractRange(1992, 2170)}
`;

const gridPath = path.join(__dirname, '../app/styles/shared/grid.module.css');
fs.writeFileSync(gridPath, gridCSS);
console.log(`✅ grid.module.css (${gridCSS.split('\n').length} lines)`);

// 2. Typography Module
const typographyCSS = `/* Typography */
/* Auto-generated from globals.css.backup */

${extractRules([
  1081, // .eyebrow
  930,  // .h2
  1146, // .h6
])}
`;

const typographyPath = path.join(__dirname, '../app/styles/shared/typography.module.css');
fs.writeFileSync(typographyPath, typographyCSS);
console.log(`✅ typography.module.css (${typographyCSS.split('\n').length} lines)`);

// 3. Utilities Module - Extract key utility classes
const utilitiesCSS = `/* Utility classes */
/* Auto-generated from globals.css.backup */

/* Display utilities */
${extractRule(250)}

/* Flexbox utilities */
${extractRules([
  1161, // .u-vflex-left-top
  1168, // .u-vflex-left-center
  1175, // .u-vflex-left-bottom
  1182, // .u-vflex-left-between
  1189, // .u-vflex-center-top
  1196, // .u-vflex-center-center
  1203, // .u-vflex-center-bottom
  1210, // .u-vflex-right-top
  1217, // .u-vflex-center-between
  1224, // .u-vflex-right-center
  1231, // .u-vflex-right-bottom
  1238, // .u-vflex-right-between
  1245, // .u-vflex-stretch-bottom
  1252, // .u-vflex-stretch-between
  1259, // .u-vflex-stretch-top
  1266, // .u-vflex-stretch-top.u-vgap
  1270, // .u-vflex-stretch-between
])}

/* Gap utilities */
${extractRules([
  1427, // .u-vgap-4
  1431, // .u-vgap-8
  1435, // .u-vgap-12
  1439, // .u-vgap-16
  1443, // .u-vgap-20
  1447, // .u-vgap-24
  1451, // .u-vgap-32
  1455, // .u-vgap-40
  1459, // .u-vgap-48
  1463, // .u-vgap-56
  1483, // .u-vgap-24-16 (responsive)
  1487, // .u-vgap-64-24 (responsive)
])}

/* Height utilities */
${extractRule(1125)}

/* Z-index utilities */
${extractRule(1133)}

/* Screen reader only */
${extractRule(1114)}

/* Alignment utilities */
${extractRule(1106)}

/* Color utilities */
${extractRules([
  1094, // .u-color-brand
  1098, // .u-color-primary
  1102, // .u-color-primary-invert
  1363, // .u-color-secondary
  1367, // .u-color-secondary-invert
])}

/* Theme utilities */
${extractRule(1320)}

/* Padding/margin utilities */
${extractRules([
  1138, // .u-pb-0
  1537, // .u-pt-0-5
])}
`;

const utilitiesPath = path.join(__dirname, '../app/styles/shared/utilities.module.css');
fs.writeFileSync(utilitiesPath, utilitiesCSS);
console.log(`✅ utilities.module.css (${utilitiesCSS.split('\n').length} lines)`);

// 4. Sunport Solutions Module
const sunportCSS = `/* Sunport Solutions Component */
/* Auto-generated from globals.css.backup */

${extractRules([
  1553, // .home_product.section
  1559, // .home_product.section.u-theme-dark
  1734, // .tab_container.container
  1592, // .tab-content__wrap
  1600, // .tab-content__item-main
  1609, // .tab-visual__item
  1620, // .tab-visual__item.active
  1624, // .tab-visual__wrap
  1630, // .tab-content__inner
  1643, // .tab-content__item-bottom
  1652, // .tab-layout__col
  1658, // .tab-visual__inner
  1666, // .tab-image
  1676, // .tab-content__item-detail
  1682, // .tab-heading
  1690, // .tab-progress
  1699, // .tab-layout__wrap
  1709, // .tab-content__item
  1720, // .tab-content__item.active
  1725, // .tab-content__top
])}
`;

const sunportPath = path.join(__dirname, '../app/components/sunport-solutions.module.css');
fs.writeFileSync(sunportPath, sunportCSS);
console.log(`✅ sunport-solutions.module.css (${sunportCSS.split('\n').length} lines)`);

// 5. Supply Chain Module
const supplychainCSS = `/* Supply Chain Component */
/* Auto-generated from globals.css.backup */

${extractRules([
  1564, // .tracks_middle
  1580, // .tracks_container
])}
`;

const supplychainPath = path.join(__dirname, '../app/components/supplychain.module.css');
fs.writeFileSync(supplychainPath, supplychainCSS);
console.log(`✅ supplychain.module.css (${supplychainCSS.split('\n').length} lines)`);

// 6. Supply Chain Background Module
const scBackgroundCSS = `/* Supply Chain Background Component */
/* Auto-generated from globals.css.backup */

${extractRule(1781)}
`;

const scBackgroundPath = path.join(__dirname, '../app/components/supplychain-components/supplychain-background.module.css');
fs.writeFileSync(scBackgroundPath, scBackgroundCSS);
console.log(`✅ supplychain-background.module.css (${scBackgroundCSS.split('\n').length} lines)`);

console.log('\n✨ CSS Modules extraction complete!');
