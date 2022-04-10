import fs from 'fs';
import path from 'path';
import template from 'lodash.template';
import { marked } from 'marked';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const data = fs.readFileSync(path.join(__dirname, '/package.json'), 'utf8');
  const applicationData = fs.readFileSync(path.join(__dirname, '/src/application.json') , 'utf8');
  const date = new Date().toLocaleString("us-US", {timeZone: "America/New_York"});
  
  // parse JSON string to JSON object
  const databases = {
    package: JSON.parse(data), 
    app: JSON.parse(applicationData),
    date
  };

  fs.readFile(path.join(__dirname, '/src/privacy-policy.md'), 'utf8', function (err, data) {
    if (err) {
      throw err; 
    }
    const markdown = template(data.toString())(databases);
    const content = marked.parse(markdown);
    const html = template(fs.readFileSync(path.join(__dirname, '/src/index.html'), 'utf8'))({content});
    process.stdout.write(html);

  });

} catch (err) {
  console.log(`Error reading data: ${err}`);
}




