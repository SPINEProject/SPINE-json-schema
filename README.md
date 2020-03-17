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
  1. Commit, Pull Request, and Merge the master branch
  1. Tag this repository according to the version in the ```package.json``` file
  1. In the SPINE repository change the version of this repository in the dependences in the ```package.json``` file
  1. In SPINE project run ```npm install```
  1. Create migration script for the database and save it the SPINE repository in the folder ```src/backedn/migrations_scripts/```
  
