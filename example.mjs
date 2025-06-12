// Example for ESM (module JS) usage
// Import the path utility from the installed package
import path from '@purinton/path';
// or import { path } from '@purinton/path'; // identical

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);
