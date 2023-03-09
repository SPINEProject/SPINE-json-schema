const path = require('path');
const fs = require('fs');
const schema = require('../schemas/skill.schema');
let Ajv = require('ajv');

var coreSchema = require('../schemas/core.schema')


const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');
ajvValidator.addSchema(schema, 'skillSchema');

console.log("ok")

const doc = {
    "_id": "f089f588-5cba-462b-a69c-e3ecc03a646b",
    "name": "Birds identification : Certification",
    "name_fr": "Birds identification : Certification",
    "docType": "skill",
    "extraDescription": "Birds identification : Certification",
    "description": "Birds identification : Certification",
    "skillsRequired": [],
    "imageUrl": "https://img.icons8.com/color/256/bird.png",
    "reference": {
        "livePresenterExperimentId": "7463d337-4365-4797-bea0-e3412b9eda35",
        "miniWorkflowSetId": "02c150e4-d1ff-42c5-a20c-d8c16a040e25",
        "miniWorkflowKey": "mw1",
        "presentationId": "004dff61-96e3-4779-ab30-298ea58e7363"
    }
}



const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/skill.schema.json#/definitions/skillDoc');
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
