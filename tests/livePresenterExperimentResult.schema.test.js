const path = require('path');
const fs = require('fs');
const schema = require('../schemas/livePresenterExperimentResult.schema');
let Ajv = require('ajv');

var coreSchema = require('../schemas/core.schema')


const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');
ajvValidator.addSchema(schema, 'skillSchema');

console.log("ok")

const doc = {
  "_id": "b91d796f1452d1a9338b8e470d35bc96",
  "_rev": "1-75d7dae405ddebd419bdc3c315fbea58",
  "docType": "livePresenterExperimentResult",
  "creationDate": "2023-03-08T11:54:07.057Z",
  "reference": {
    "workflowExecutorId": "8bc34ae7-c733-438f-8ecf-7db03ba1cf87"
  },
  "scoring": [
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 1",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "European greenfinch",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Chloris chloris"
      },
      "inputs": {
        "audioEntityId": "c1191e67-2047-4380-8e68-12f594a6e903"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 2",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Common chiffchaff",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Phylloscopus collybita"
      },
      "inputs": {
        "audioEntityId": "ebd2194d-9fa7-40ae-b180-e2a0e05f3e1a"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 3",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Long-tailed tit",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Aegithalos caudatus"
      },
      "inputs": {
        "audioEntityId": "c2630db5-3b04-4ef0-af34-d4f8cb85842c"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 4",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Eurasian jay",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Garrulus glandarius"
      },
      "inputs": {
        "audioEntityId": "2b9f75ed-8151-4fbb-9d5b-378e9df2ed38"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 5",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Eurasian wren",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Troglodytes troglodytes"
      },
      "inputs": {
        "audioEntityId": "1c46ec28-3fab-4c80-b30f-3d93c684e518"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 6",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "European robin",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Erithacus rubecula"
      },
      "inputs": {
        "audioEntityId": "94a54fe0-0ee4-4d63-8c5a-809f21430ff4"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 7",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Eurasian treecreeper",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Certhia familiaris"
      },
      "inputs": {
        "audioEntityId": "46194b6a-1501-414f-977d-687862d0ced0"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 8",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Black woodpecker",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Dryocopus martius"
      },
      "inputs": {
        "audioEntityId": "b1cb5524-b3e0-4ff4-9876-9b21ef580aeb"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 9",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Common buzzard",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Buteo buteo"
      },
      "inputs": {
        "audioEntityId": "96cde438-bbe6-4101-be7e-458793722cb7"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 10",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Long-tailed tit",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Aegithalos caudatus"
      },
      "inputs": {
        "audioEntityId": "8c59aec4-6944-4982-bec4-8266cdbd8041"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 11",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Common chaffinch",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Fringilla coelebs"
      },
      "inputs": {
        "audioEntityId": "1335f60b-7826-41fa-8ed2-f91c1677332b"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 12",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Subalpine warbler",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Curruca cantillans"
      },
      "inputs": {
        "audioEntityId": "a9fa0824-d368-4f14-819f-f2eeb5c68f87"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 13",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Cirl bunting",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Emberiza cirlus"
      },
      "inputs": {
        "audioEntityId": "f412008f-2606-46ff-aa20-2cb6dd489517"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 14",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Goldcrest",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Regulus regulus"
      },
      "inputs": {
        "audioEntityId": "03851e58-6d4e-42c9-ab7e-8beb6bf86bb3"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 15",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Goldcrest",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Regulus regulus"
      },
      "inputs": {
        "audioEntityId": "f4aab546-fbde-4f03-8900-8b1dc3d947e1"
      }
    },
    {
      "value": 0,
      "max": 1,
      "tooltip": "1 point if correct, 0, if not",
      "name": "case 16",
      "userAnswer": {
        "label": "No answer",
        "ontologyClassIri": "No answer"
      },
      "realAnswer": {
        "label": "Dunnock",
        "ontologyId": "bb2d343d-ef22-4f4a-933e-99d99b2b3614",
        "ontologyClassIri": "Prunella modularis"
      },
      "inputs": {
        "audioEntityId": "88b7f06d-db23-4a3f-b947-ef26f0b74347"
      }
    }
  ],
  "userId": "g2@test.com",
  "userSnapshot": {
    "name": "Grégory",
    "lastname": "Bliault",
    "nickname": "",
    "profession": "",
    "specialty": "",
    "eduLevel": "",
    "experience": "",
    "id": "e5fdec81-9b45-464c-b74d-4763b17392d9",
    "active": true
  },
  "views": {},
  "final": {
    "max": 16,
    "score": 0,
    "value": false,
    "text": "Score is too low",
    "linkText": "Try again",
    "tooltip": "Votre score sur 16 cas. 1 cas correct = 1 point.",
    "link": "/skills/playskill/004dff61-96e3-4779-ab30-298ea58e7363",
    "livePresenterExperiment": "7463d337-4365-4797-bea0-e3412b9eda35",
    "miniWorkflowSet": "02c150e4-d1ff-42c5-a20c-d8c16a040e25",
    "miniWorkflow": "mw1"
  },
  "passed": false
}


const validate = ajvValidator.getSchema('https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/livePresenterExperimentResult.schema.json#/definitions/lpExperimentResultDoc');
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
