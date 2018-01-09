const fs = require('fs');
const ebnf = require('ebnf');

const grammarFilename = process.argv[2];
const grammar = fs.readFileSync(grammarFilename);
const parser = ebnf.Grammars.W3C.Parser(grammar);
let language = "";

process.stdin.setEncoding('utf8');
process.std.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        language += chunk;
    }
});
process.std.on('end', () => {
    const ast = parser.getAST(language);
    console.log(ast);
});
