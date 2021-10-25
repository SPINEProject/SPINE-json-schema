/**
 *This test shows how to use Ajv variables locally - error messages, validate and others can be customized
 * in files
 *
 */

var Ajv = require('ajv'); //We need to override ajv, if we want to customize it
var ajv = new Ajv();

let { it, expect } = global;

const validateSecuredUrl = function (schema, uri) {
    validateSecuredUrl.errors = [{keyword: 'secured', message: 'avatar url must be "https" schema', params: {keyword: 'secured'}}];
    return uri.indexOf('https://') === 0;
};

ajv.addKeyword('securedUrl', {
    validate: validateSecuredUrl,
    errors: true
});


test(`should user's schema be valid`, () => {
    const shema = {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "fullname": {
                    "type": "string",
                    "minLength": 2
                },
                "avatar": {
                    "type": "string",
                    "format": "uri",
                    "securedUrl": true,
                },
            },
        },
    };

    const valid = ajv.validate(shema, [
        {
            fullname: 'ab',
            avatar: "http://mywebsite.com/path/to/avatar"
        }
    ]);

    // this function can be used globally
    const errorMessage = (ajv.errors || []).map(error => {
        try {
            return `AJV error: keyword: ${error.keyword}\n message: ${error.message} \n data path: ${error.dataPath}\n schema path: ${error.schemaPath}\n`;
        } catch (error) {
            return error.message;
        }
    }).join('\n');


    expect(valid).not.toBeValid(errorMessage);  // we want to have error in "http" - uncomment "not" to see error and message
});