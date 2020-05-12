const toolSchema = require('../schemas/tool.schema');
const data = require( "../examples/segmentationMedullaOblongata/tool_sliceSelectorInAxialDirection");

let { test, expect ,it} = global;

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