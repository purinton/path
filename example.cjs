// Example for CommonJS usage
// Import the path utility from the installed package
const path = require('@purinton/path');
// or const { path } = require('@purinton/path'); // identical

// for CommonJS, we need to pass __dirname
const envFile = path(__dirname, '.env');
console.log(envFile);
