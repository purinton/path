import path from '@purinton/path';
const envFile = path(import.meta, ".env");
console.log(envFile);
