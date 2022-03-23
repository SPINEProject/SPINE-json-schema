const toolSchema = require('../schemas/tool.schema');


let { test, expect ,it} = global;

test('tool schema for tool_sliceSelectorInAxialDirection', () => {
    expect(true).toBeAjvValid(toolSchema,require( "../examples/tool/invisibleFilterDemo").miniWorkflow.currentTool);
});


test('tool schema ', () => {
    expect(true).toBeAjvValid(toolSchema,require( "../examples/tool/sceneDemo").miniWorkflow.currentTool);
});