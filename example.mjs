// Example for ESM (module JS) usage
// Import the path utility from the installed package
import path, { pathUrl } from '@purinton/path';
// or import { path } from '@purinton/path'; // identical

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);

// Using pathUrl to get a file URL href for dynamic import
const envFileUrl = pathUrl(import.meta, ".env");
console.log(envFileUrl);
// Example: dynamic import
// import(envFileUrl).then(mod => console.log(mod));
