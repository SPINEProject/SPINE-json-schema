const path = require('path');
const fs = require('fs');
var coreSchema = require('../schemas/core.schema')
let Ajv = require('ajv');
const HttpMethod = ["get", "post", "put"]
const index = require('../schemas/API/index');

try {
    for(let p in index["paths"]) {


        const filepath = path.join( "../schemas/API", index["paths"][p]["$ref"] )
        const def = require(filepath)


        for(const prop in def) {
            if(HttpMethod.includes(prop)) {
                // look for examples and schema in responses and requestBody
                console.log("\x1b[34m ############### Validating "+prop+" "+p+" \x1b[37m")
                if(def[prop].hasOwnProperty("requestBody")) {

                    console.log("\x1b[34m  request body \x1b[37m")
                    const splitted = def[prop].requestBody.content["application/json"].schema["$ref"].split("#")
                    const schemaName = path.parse(splitted[0]).base
                    const schema = require(path.join("../schemas/", schemaName))
                    const ajvValidator = new Ajv({ allErrors: true });
                    ajvValidator.addSchema(coreSchema, 'coreSchema');
                    ajvValidator.addSchema(schema, 'schema');

                    // Look for examples
                    for(let example in def[prop].requestBody.content["application/json"].examples) {
                        console.log("\x1b[33m  ### example "+example+" \x1b[37m")
                        const validate = ajvValidator.getSchema('schema#'+splitted[1]);
                        try {
                            //def[prop].requestBody.content["application/json"].examples[example].value.name = {}
                            //console.log(def[prop].requestBody.content["application/json"].examples[example].value)
                            valid = validate(def[prop].requestBody.content["application/json"].examples[example].value);
                            console.log("valid "+valid)
                        }
                        catch (err) {
                            console.log(err)
                            throw 'Error while validating the filter document, check the schema definition. Error:'+ err
                        }

                        if (!valid) {
                            let errorMessage = JSON.stringify(validate.errors[0]).replace(/\"/g, '');
                            console.log(errorMessage)
                            throw 'Error while validating the filter document, check the schema definition. Error:' + errorMessage
                        }
                    }
                }
                if(def[prop].hasOwnProperty("responses") && def[prop].responses.hasOwnProperty("200")) {

                    console.log("\x1b[34m  response 200 \x1b[37m")
                    const splitted = def[prop].responses["200"].content["application/json"].schema["$ref"].split("#")
                    const schemaName = path.parse(splitted[0]).base
                    const schema = require(path.join("../schemas/", schemaName))
                    const ajvValidator = new Ajv({ allErrors: true });
                    ajvValidator.addSchema(coreSchema, 'coreSchema');
                    ajvValidator.addSchema(schema, 'schema');

                    // Look for examples
                    for(let example in def[prop].responses["200"].content["application/json"].examples) {
                        console.log("\x1b[33m  ### example "+example+" \x1b[37m")
                        const validate = ajvValidator.getSchema('schema#'+splitted[1]);
                        try {
                            valid = validate(def[prop].responses["200"].content["application/json"].examples[example].value);
                            console.log("valid "+valid)
                        }
                        catch (err) {
                            console.log(err)
                            throw 'Error while validating the filter document, check the schema definition. Error:'+ err
                        }

                        if (!valid) {
                            let errorMessage = JSON.stringify(validate.errors[0]).replace(/\"/g, '');
                            console.log(errorMessage)
                            throw 'Error while validating the filter document, check the schema definition. Error:' + errorMessage
                        }
                    }
                }
            }
        }
        
    }

}catch(err)
{
console.log(err)
throw err
}


