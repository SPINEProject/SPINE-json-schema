const path = require('path');
const fs = require('fs');
var coreSchema = require('../schemas/core.schema')
let Ajv = require('ajv');
const HttpMethod = ["get", "post", "put"]
const index = require('../schemas/API/index');

const ajvValidator = new Ajv({ allErrors: true });
ajvValidator.addSchema(coreSchema, 'coreSchema');

const loadAndParseSchema = function (schemaPath) {
      try {
        const readAndParseObjectRecursively = function(obj) {
          try {
            for(const prop in obj) {
              if(obj.hasOwnProperty(prop)) {
                // Is the prop a ref?
                if(prop === "$ref") {
                  // Change the ref
                  if(obj[prop].startsWith("./")) {
                    // add dependency
                    const startMarker = "./";
                    const endMarker = ".schema.json";
                    console.log(obj[prop])
                    const startIndex = obj[prop].indexOf(startMarker) + startMarker.length;
                    const endIndex = obj[prop].lastIndexOf(endMarker) + endMarker.length;
                    const extractedString = obj[prop].substring(startIndex, endIndex);
                    console.log(path.join(
                      "../schemas/",
                      extractedString
                    ))
                    const schema = require(path.join(
                      "../schemas/",
                      extractedString
                    ))

                    obj[prop] = obj[prop].replace("./", "https://raw.githubusercontent.com/SPINEProject/SPINE-json-schema/master/schemas/");

                    
                    try {
                      ajvValidator.addSchema(schema);
                    }
                    catch(err) {
                      //console.log(err)
                    }

                  }
                }
                else {
                  if(obj[prop] instanceof Object) {
                    readAndParseObjectRecursively(obj[prop]);
                  }
                }
              }
            }
          } catch(err) {
            throw err;
          }
        }
        // Load schema
        let schema = require(schemaPath);
        readAndParseObjectRecursively(schema);
        return schema;
      }
      catch(err) {
        throw err
      }
    }

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
                    const schema = loadAndParseSchema(path.join("../schemas/", schemaName))
                    const schemaId = schema.$id;
                    try {
                    ajvValidator.addSchema(schema);
                  } catch(err) {//skip
                  }

                    // Look for examples
                    for(let example in def[prop].requestBody.content["application/json"].examples) {
                        console.log("\x1b[33m  ### example "+example+" \x1b[37m")
                        const validate = ajvValidator.getSchema(schemaId+'#'+splitted[1]);
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
                    if(def[prop].responses["200"].content["application/json"].schema) {
                      const splitted = def[prop].responses["200"].content["application/json"].schema["$ref"].split("#")
                      const schemaName = path.parse(splitted[0]).base
                      const schema = loadAndParseSchema(path.join("../schemas/", schemaName))
                      const schemaId = schema.$id;
                      try {
                      ajvValidator.addSchema(schema);
                    } catch(err) {//skip
                    }

                      // Look for examples
                      for(let example in def[prop].responses["200"].content["application/json"].examples) {
                          console.log("\x1b[33m  ### example "+example+" \x1b[37m")
                          const validate = ajvValidator.getSchema(schemaId+'#'+splitted[1]);
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
                    else {
                      console.log("no schema found")
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
