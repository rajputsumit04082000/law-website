const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  [/Delhi NCR & nearby regions/gi, "Meerut & nearby regions"],
  [/Delhi NCR/gi, "Meerut"],
  [/Delhi & NCR/gi, "Meerut"],
  [/Delhi\/NCR/gi, "Meerut"],
  [/Mohali/gi, "Meerut"],
  [/Sector 76, SAS Nagar, Punjab/gi, "Uday Vihar, B177, Uday City, Meerut, Uttar Pradesh 250110"],
  [/Judicial Court Complex, Mohali/gi, "Uday Vihar, B177, Uday City, Meerut"],
  [/Judicial Court Complex/gi, "Meerut Office"],
  [/\+919911077828/g, "+917417617432"],
  [/\+91\s*9911077828/g, "+91 74176 17432"],
  [/\+910000000000/g, "+917417617432"],
  [/\+91\s*0000000000/g, "+91 74176 17432"],
  [/dummy@example\.com/gi, "abhinavpradhan748@gmail.com"],
  [/info@primelegalservice\.com/gi, "abhinavpradhan748@gmail.com"],
];

const srcDir = path.join(process.cwd(), 'src');

walkDir(srcDir, (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  replacements.forEach(([regex, replaceWith]) => {
    content = content.replace(regex, replaceWith);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('UPDATED:', path.relative(process.cwd(), filePath));
  }
});

console.log('Location and contact details replacement complete!');
