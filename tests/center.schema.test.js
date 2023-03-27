const path = require('path');
const fs = require('fs');
const schema = require('../schemas/center.schema');
let Ajv = require('ajv');

var coreSchema = require('../schemas/core.schema')


const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');
ajvValidator.addSchema(schema, 'skillSchema');

console.log("ok")

const doc = {
    "_id": "9dafc121-0730-4a23-9dc4-1a0ee6c7c6f2",
    "docType": "center",
    "latitude": 51.494754,
    "longitude": 11.948814,
    "name": "and.gal_1"
}


const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/center.schema.json#/definitions/centerDoc');
try {
  valid = validate(doc);
}
catch (err) {
  throw 'Error while validating the filter document, check the schema definition. Error:'+ err
}

if (!valid) {
  let errorMessage = JSON.stringify(validate.errors[0]).replace(/\"/g, '');
  throw 'Error while validating the filter document, check the schema definition. Error:' + errorMessage
}
