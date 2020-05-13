const toolSchema = require('../schemas/tool.schema');

let { test, expect ,it} = global;

test('tool schema for tool_sliceSelectorInAxialDirection', () => {
    expect(true).toBeAjvValid(toolSchema,require( "../examples/segmentationMedullaOblongata/tool_sliceSelectorInAxialDirection"));
});