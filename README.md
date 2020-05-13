# SPINE-json-schema
Public JSON schemas for SPINE


# READ THIS BEFORE MAKING CHANGES
If you make changes and tag this project make sure that the version of the ```package.json``` file is the same as the tagged version of the repository. This will allow the front-end of SPINE to ```npm install``` the correct version.

# For SPINE developers
- We have a version of the schema used in the SPINE project saved in a document in the database. All the documents in the database have to be compliant with this schema.
- The front-end will generate the schema validator in a static way given that all the documents are in the same json schema version.
- We need to provide migration scripts for the database for each change in the schema.

## Procedure after changes
  1. Update schema documents
  1. Update the version of the ```package.json``` file
  1. Commit, Pull Request, and Merge into the master branch
  1. Tag this repository according to the version in the ```package.json``` file
  1. In the SPINE repository change the version of this repository in the dependences in the ```package.json``` file
  1. In SPINE project run ```npm install```
  1. Create migration script for the database and save it the SPINE repository in the folder ```src/backedn/migrations_scripts/```. ***The migration script changes at least the document having the version of the json schema used.***
  1. Create a release for SPINE project including migration instructions from previous releases. Please refer to the migration script in the commit messages.
  
## Testing with Jest and Ajv 
All schemas should be validated with tests, based on Ajv library. Since Jest can’t 
specify the error message, in order to display a meaningful error message, 
we will have to create a custom matcher to show our own message, returned by Ajv.
It is shown in [Example of matcher extension](/tests/jest.ajv.schema.test.js).

### Test cases
Examples used for testing are defined in "examples" subfolders. To identify weak tests 
[Mutation tests](https://en.wikipedia.org/wiki/Mutation_testing) are applied (json files with _mutation._ prefix).

### Links:
 
[Test JSON schema with AJV and Jest](https://medium.com/@moshfeu/test-json-schema-with-ajv-and-jest-c1d2984234c9 )

[Getting started with JEST](https://jestjs.io/docs/en/getting-started)

[Getting started with Ajv](https://github.com/ajv-validator/ajv)

TODO:
Set up coverage as in [Ajv-Istanbul](https://github.com/ajv-validator/ajv-istanbul)