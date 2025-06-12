// Example for module JS (ESM) usage
// ESM should pass import.meta as the first argument

// Import the path utility from the installed package
import path from '@purinton/path';

// Get the absolute path to a .env file in the same directory as this module
const envFile = path(import.meta, ".env");

// Print the resolved absolute path
console.log(envFile);
