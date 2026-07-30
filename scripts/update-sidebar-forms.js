const fs = require('fs');
const path = require('path');

const pages = [
  ['src/app/practice-areas/bail-matters/page.tsx', 'Bail Matters'],
  ['src/app/practice-areas/civil-lawyer/page.tsx', 'Civil Lawyer'],
  ['src/app/practice-areas/corporate-lawyer/page.tsx', 'Corporate Lawyer'],
  ['src/app/practice-areas/criminal-lawyer/page.tsx', 'Criminal Lawyer'],
  ['src/app/practice-areas/divorce-lawyer/page.tsx', 'Divorce Lawyer'],
  ['src/app/practice-areas/domestic-violence/page.tsx', 'Domestic Violence'],
  ['src/app/practice-areas/family-disputes/page.tsx', 'Family Disputes'],
  ['src/app/practice-areas/matrimonial-lawyer/page.tsx', 'Matrimonial Lawyer'],
  ['src/app/practice-areas/supreme-court/page.tsx', 'Supreme Court'],
  ['src/app/service/cat-services/page.tsx', 'CAT Services'],
  ['src/app/service/child-custody/page.tsx', 'Child Custody'],
  ['src/app/service/consumer-disputes/page.tsx', 'Consumer Disputes'],
  ['src/app/service/court-marriage/page.tsx', 'Court Marriage'],
  ['src/app/service/cyber-law/page.tsx', 'Cyber Law'],
  ['src/app/service/debt-recovery/page.tsx', 'Debt Recovery'],
  ['src/app/service/delhi-high-court/page.tsx', 'Delhi High Court'],
  ['src/app/service/legal-documentation/page.tsx', 'Legal Documentation'],
  ['src/app/service/property-lawyer/page.tsx', 'Property Lawyer'],
  ['src/app/service/rera-matters/page.tsx', 'RERA Matters'],
];

// Matches the old static sidebar form block
const oldFormRegex = /(\s*\{\/\* Contact Form \*\/\}\s*)\s*<div className="bg-\[#f5f5f5\][^]*?<\/form>\s*<\/div>/;

pages.forEach(([filePath, subject]) => {
  const full = path.join(process.cwd(), filePath);

  if (!fs.existsSync(full)) {
    console.log('NOT FOUND:', filePath);
    return;
  }

  let content = fs.readFileSync(full, 'utf8');

  // Add import if missing
  if (!content.includes('SidebarEnquiryForm')) {
    content = content.replace(
      /^(import \{ Metadata \} from "next";)/m,
      `$1\nimport { SidebarEnquiryForm } from "@/components/sections/SidebarEnquiryForm";`
    );
  }

  // Replace old static form with component
  const newForm = `              {/* Contact Form */}\n              <SidebarEnquiryForm subject="${subject}" />`;
  const replaced = content.replace(oldFormRegex, newForm);

  if (replaced === content) {
    console.log('NO MATCH (manual check needed):', filePath);
  } else {
    fs.writeFileSync(full, replaced, 'utf8');
    console.log('UPDATED:', filePath);
  }
});

console.log('\nAll done!');
