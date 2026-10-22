const fs = require('node:fs');
const path = require('node:path');

const outputDirectory = path.join(__dirname, '..', 'dist');
fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const file of ['index.html', 'styles.css', 'Jason_Berdisola_CV.html']) {
  fs.copyFileSync(path.join(__dirname, '..', file), path.join(outputDirectory, file));
}
