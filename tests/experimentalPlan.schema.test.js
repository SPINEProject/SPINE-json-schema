const path = require('path');
const fs = require('fs');
const planSchema = require('../schemas/experimentalPlan.schema');


let { test, expect , describe} = global;


describe('Automatic Suite for testing all plans in examples folder', () => {

  const examplesPath = '../examples/experimentalPlan/';
  const directoryPath = path.join(__dirname, examplesPath);
  const files = fs.readdirSync(directoryPath, function (err, files) {     if (err) return [];  });
  files.forEach(file=> {
    if (file.includes(".json")){
      test(`checks for ${file}`, () => {
        expect(true).toBeAjvValid(planSchema,require( examplesPath+file.split(".json")[0]).config.experimentalPlan);
      });
    }
  });
});

