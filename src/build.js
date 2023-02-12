const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const Puppeteer = require('puppeteer');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);
// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
const html = template({
  ...templateData,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});
fs.writeFileSync(outputDir + '/index.html', html);

buildPdf = async function (inputFile, outputFile) {
  const browser = await Puppeteer.launch({
    headless: true,
    slowMo: 50
  });
  console.log("---1")
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  console.log("---2")

  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '2cm',
      right: '2cm',
      bottom: '2cm',
      left: '2.54cm',
    },
  });
  
  console.log("---3")
  await browser.close();
  console.log("---4")
};

// Build PDF
buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`).catch(console.error);

