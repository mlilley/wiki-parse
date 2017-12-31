const fs = require('fs');
const wtf = require('wtf_wikipedia');
const util = require('util');
const XmlStream = require('xml-stream');

const filename = process.argv[2];
const readStream = fs.createReadStream(filename);
const xmlParser = new XmlStream(readStream);

let n = 0;
xmlParser.on('updateElement: page', el => {
    ++n > 100 ? process.exit() : true
    if (!el.revision || !el.revision.text || !el.revision.text.$text) return;

    const wiki = wtf.parse(el.revision.text.$text);
    if (!wiki.type == 'page' || !wiki.sections || !wiki.sections[0] || !wiki.sections[0].sentences || !wiki.sections[0].sentences[0] || !wiki.sections[0].sentences[0].text) return;

    console.log(wiki.sections[0].sentences[0].text);
});
