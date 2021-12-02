const path = require('path');
const fs = require('fs');
const cohortSchema = require('../schemas/cohort.schema');


let { test, expect ,it, describe} = global;


describe('Automatic Suite for testing all cohorts in examples folder', () => {

  const directoryPath = path.join(__dirname, '../examples/cohort');
  const files = fs.readdirSync(directoryPath, function (err, files) {     if (err) return [];  });
  files.forEach(file=> {

    if (file.includes(".json")){
      test(`checks for ${file}`, () => {
        expect(true).toBeAjvValid(cohortSchema,require( "../examples/cohort/"+file.split(".json")[0]));
      });
    }
  });
});

