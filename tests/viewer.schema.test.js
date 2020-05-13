const schema = require('../schemas/viewer.schema');
const data1 = require( "../examples/viewer/viewer.example");
const data2 = require( "../examples/viewer/leptostep1middle.example");
let { test, expect ,it, describe} = global;

// Uncomment below if you want to override ajv for some reasons!!!
// var Ajv = require('ajv');
// var ajv = new Ajv();


describe('Viewer schemas', () => {

    test('Simple viewer', () => {
        expect(true).toBeAjvValid(schema, data1);
    });

    test('Lepto project, step1, Middle viewer', () => {
        expect(true).toBeAjvValid(schema, data2);
    });
});