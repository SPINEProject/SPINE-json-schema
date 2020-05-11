const schema = require('../schemas/viewer.schema');
const data = require( "../examples/viewer.example");
let { test, expect ,it} = global;

var Ajv = require('ajv');
var ajv = new Ajv();


test('viewer schema', () => {
    const valid = ajv.validate(schema,data);
    const errorMessage = (ajv.errors || []).map(error => {
        try {
            return `AJV error: keyword: ${error.keyword}\n message: ${error.message} \n data path: ${error.dataPath}\n schema path: ${error.schemaPath}\n`;
        } catch (error) {
            return error.message;
        }
    }).join('\n');
    expect(valid).toBeValid(errorMessage);
});
