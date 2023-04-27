const path = require('path');
const fs = require('fs');

const schema = require('../schemas/imageFilter.schema');
let Ajv = require('ajv');

var coreSchema = require('../schemas/core.schema')


const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');
ajvValidator.addSchema(schema, 'schemaSchema');

console.log("ok")

const doc = {
  "uuid": "4c636555d3963f0a65312032bf001eb7",
  "name": "My filter",
  "filter": {
      "logicalOperator": {
          "type": "LOGICAL_OPERATOR",
          "label": "OR",
          "value": "OR"
      },

      "criteria": [
          {
              "value": 400,
              "operator": {
                  "type": "NUMERICAL_OPERATOR",
                  "variant": "ANY_ELEMENT",
                  "value": "less than",
                  "label": "<"
              },
              "attribute": "EchoTime"
          }
      ],
      "expressions": []
  },
  "reference": {
      "ownerId": "e5fdec81-9b45-464c-b74d-4763b17392d9"
  }
}


const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/imageFilter.schema.json#/definitions/getFilterResponse');
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
