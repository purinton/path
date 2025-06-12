// Example for CommonJS usage
// CommonJS should send undefined as the first argument

// Import the path utility from the installed package
const path = require('@purinton/path');

// Get the absolute path to a .env file in the same directory as this file
const envFile = path(undefined, '.env');

// Print the resolved absolute path
console.log(envFile);
