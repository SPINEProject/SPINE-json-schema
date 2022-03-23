const path = require('path');
const fs = require('fs');
const toolSchema = require('../schemas/tool.schema');


let { test, expect ,it, describe} = global;


describe('Automatic Suite for testing all tools in examples folder', () => {

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

describe('Automatic Suite for testing all tools in remote location folder', () => {

  const globalPath = "c:\\PATH"; // PUT YOUR LOCAL FOLDER HERE
  const files = fs.readdirSync(globalPath, function (err, files) {     if (err) return [];  });
  files.forEach(file=> {
    if (file.includes(".json")){
      const jsonObject = require( globalPath+file.split(".json")[0]);
      if (jsonObject!=null && jsonObject.miniWorkflow!=null && jsonObject.miniWorkflow.currentTool!=null)
        test(`checks for ${file}`, () => {
          expect(true).toBeAjvValid(toolSchema,jsonObject.miniWorkflow.currentTool);
        });
    }
  });
});