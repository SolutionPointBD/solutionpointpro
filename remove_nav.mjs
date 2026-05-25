import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/import Navbar from '\.\.\/components\/Navbar';\n/g, '');
  content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/g, '');
  content = content.replace(/[ \t]*<Navbar \/>\n/g, '');
  content = content.replace(/[ \t]*<Footer \/>\n/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
