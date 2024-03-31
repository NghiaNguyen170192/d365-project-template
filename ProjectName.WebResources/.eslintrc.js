module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
        // e.g., "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension
            rules: {
                // Override rules for TypeScript files here
            },
        },
    ],
};