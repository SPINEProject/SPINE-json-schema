/**
 * Matcher for Ajv.
 * Defined here, so can be used globally.
 * Thi file has to be referred in package.json
 */
expect.extend({
    toBeValid(isValid, errorMessage) {
        return {
            message: () => isValid ? '' : errorMessage,
            pass: isValid
        }
    }
});
