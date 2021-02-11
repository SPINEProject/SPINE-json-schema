const schema = require('../schemas/widget.schema');
let { test, expect ,describe} = global;

// Uncomment below if you want to override ajv for some reasons!!!
// var Ajv = require('ajv');
// var ajv = new Ajv();


describe('Widget schemas', () => {

    test('Full widget configuration', () => {
        expect(true).toBeAjvValid(schema,  require( "../examples/widgets/full.example"));
    });

    test('Lepto project, step1, widgets', () => {
        expect(true).toBeAjvValid(schema, require( "../examples/widgets/leptostep1.example"));
    });

    test('Mutation test for widgets3', () => {
        expect(true).not.toBeAjvValid(schema, require( "../examples/widgets/mutation.example")); // mutation, so valid condition is negated
    });
});