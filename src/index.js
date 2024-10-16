const {Command} = require("commander");
const fs = require('fs');
const path = require("node:path");

let program = new Command();

program
    .option('-i, --input <string>', 'Input file path')
    .option('-o, --output <string>', 'Output file path')
    .option('-d, --display', 'Display result')
    .option('-b, --debug', 'Show debug info');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);

if (!options.input) {
    console.error("You should specify the input file");
    process.exit(1)
}

let inputFilePath = options.input;
let outputFilePath = options.output;

