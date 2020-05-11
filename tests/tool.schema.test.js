const toolSchema = require('../schemas/tool.schema');
const data = require( "../examples/segmentationMedullaOblongata/tool_sliceSelectorInAxialDirection");
const taskSchema = require ("../schemas/task.schema");
const coreSchema = require ("../schemas/core.schema");
const viewerSchema = require ("../schemas/viewer.schema");
const annotationSchema  = require ("../schemas/annotation.schema");
const annotationForm = require ("../schemas/annotationForm.schema");
const roiSchema =  require ("../schemas/roi.schema");

let { test, expect ,it} = global;

var Ajv = require('ajv');
var ajv = new Ajv();
ajv.addSchema(coreSchema,'coreSchema');
ajv.addSchema(taskSchema,'taskSchema');
ajv.addSchema(annotationSchema,'annotationSchema');
ajv.addSchema(annotationForm,'annotationForm');
ajv.addSchema(roiSchema,'roiSchema');
ajv.addSchema(toolSchema,'toolSchema');
ajv.addSchema(viewerSchema,'viewerSchema');

test('tool schema for tool_sliceSelectorInAxialDirection', () => {
    const valid = ajv.validate(toolSchema,data);
    const errorMessage = (ajv.errors || []).map(error => {
        try {
            return `AJV error: keyword: ${error.keyword}\n message: ${error.message} \n data path: ${error.dataPath}\n schema path: ${error.schemaPath}\n`;
        } catch (error) {
            return error.message;
        }
    }).join('\n');
    expect(valid).toBeValid(errorMessage);
});