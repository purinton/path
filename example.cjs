// Example for CommonJS usage
// Import the path utility from the installed package
const { path, pathUrl } = require('@purinton/path');
// or const { path } = require('@purinton/path'); // identical

// for CommonJS, we need to pass __dirname
const envFile = path(__dirname, '.env');
console.log(envFile);

// Using pathUrl to get a file URL href for dynamic import
const envFileUrl = pathUrl(__dirname, '.env');
console.log(envFileUrl);
// Example: dynamic import (if using ESM loader in CJS)
// import(envFileUrl).then(mod => console.log(mod));
