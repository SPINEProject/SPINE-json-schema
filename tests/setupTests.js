const istanbul = require('istanbul');


const taskSchema = require ("../schemas/task.schema");
const coreSchema = require ("../schemas/core.schema");
const viewerSchema = require ("../schemas/viewer.schema");
const annotationSchema  = require ("../schemas/annotation.schema");
const annotationForm = require ("../schemas/annotationForm.schema");
const roiSchema =  require ("../schemas/roi.schema");
const toolSchema = require('../schemas/tool.schema');


/**
 * Matcher for Ajv.
 * Defined here, so can be used globally.
 * Thi file has to be referred in package.json
 */
expect.extend({
    toBeValid(isValid, errorMessage) {
        return {
            message: () => isValid ? '' : errorMessage,
            pass: isValid
        }
    }
});

beforeAll(() => {
    const Ajv = require('ajv');
    global.ajv = new Ajv(); //setting global variable declared in package.json jest configuration
    require('ajv-istanbul')(global.ajv);
    ajv.addSchema(coreSchema,'coreSchema');
    ajv.addSchema(taskSchema,'taskSchema');
    ajv.addSchema(annotationSchema,'annotationSchema');
    ajv.addSchema(annotationForm,'annotationForm');
    ajv.addSchema(roiSchema,'roiSchema');
    ajv.addSchema(toolSchema,'toolSchema');
    ajv.addSchema(viewerSchema,'viewerSchema');
});
