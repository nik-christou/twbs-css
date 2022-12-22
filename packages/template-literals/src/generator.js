import fs from 'fs';
import {bootstrapItems} from './bootstrap-items.js';

const literalDir = './dist/literal';
fs.rmSync(literalDir, {force: true, recursive: true});
fs.mkdirSync(literalDir, { recursive: true });

const taggedDir = './dist/tagged';
fs.rmSync(taggedDir, {force: true, recursive: true});
fs.mkdirSync(taggedDir, { recursive: true });

for(const bootstrapItem of bootstrapItems) {

    console.log(`Processing: ${bootstrapItem.srcCss}`);

    // read the css file
    const itemStyles = fs.readFileSync(`gen/${bootstrapItem.srcCss}`);

    // delete string literal template file in 'dist/literal' if present
    fs.rmSync(`./dist/literal/${bootstrapItem.literalTemplateFilename}`, {force: true, recursive: true});

    // delete string tagged template file in 'dist/tagged' if present
    fs.rmSync(`./dist/tagged/${bootstrapItem.taggedTemplateFilename}`, {force: true, recursive: true});

    // open literal template file
    const literalTemplateStream = fs.createWriteStream(`./dist/literal/${bootstrapItem.literalTemplateFilename}`);

    // write css styles as string literal
    literalTemplateStream.once('open', (fd) => {
        literalTemplateStream.write(`export const ${bootstrapItem.literalTemplateConstName} = \`\n`);
        literalTemplateStream.write(itemStyles);
        literalTemplateStream.write("`;");
        literalTemplateStream.end();
    });

    // open tagged template file
    const taggedTemplateStream = fs.createWriteStream(`./dist/tagged/${bootstrapItem.taggedTemplateFilename}`);

    // write css styles as tagged literal
    taggedTemplateStream.once('open', (fd) => {
        taggedTemplateStream.write(`import {css} from 'lit';\n`);
        taggedTemplateStream.write(`export const ${bootstrapItem.taggedTemplateConstName} = css\`\n`);
        taggedTemplateStream.write(itemStyles);
        taggedTemplateStream.write("`;");
        taggedTemplateStream.end();
    });
}