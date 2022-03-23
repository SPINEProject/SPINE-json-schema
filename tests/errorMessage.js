export default function errorMessage (errors) {
   return (errors || []).map(error => {
        try {
            return `AJV error: keyword: ${error.keyword}\n message: ${error.message} \n data path${error.dataPath}\n schemaPath: ${error.schemaPath}\n`;
        } catch (error) {
            return error.message;
        }
    }).join('\n');
}