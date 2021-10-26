const path = require('path');
const fs = require('fs');
const toolSchema = require('../schemas/tool.schema');


let { test, expect ,it, describe} = global;


describe('Automatic Suite for testing all tools in examples', () => {

  const directoryPath = path.join(__dirname, '../examples/tool');
  const files = fs.readdirSync(directoryPath, function (err, files) {     if (err) return [];  });
  files.forEach(file=> {

        if (file.includes(".json")){
        test(`checks for ${file}`, () => {
            expect(true).toBeAjvValid(toolSchema,require( "../examples/tool/"+file.split(".json")[0]).miniWorkflow.currentTool);
         });
        }
    });
});