# path

[![npm version](https://img.shields.io/npm/v/@purinton/path.svg)](https://www.npmjs.com/package/@purinton/path) [![license](https://img.shields.io/github/license/purinton/path.svg)](LICENSE) [![build status](https://github.com/purinton/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/path/actions)

An ESM/Jest/Node friendly path utility.

## Install

```bash
npm install @purinton/path
```

## Example for module JS (ESM) usage

You can pass either `import.meta` (recommended for ESM) or `__dirname` (if available) as the first argument:

```js
import path from '@purinton/path';

// Using import.meta (recommended for ESM)
const envFile = path(import.meta, ".env");

// Or, if __dirname is available (e.g. in some ESM environments)
// const envFile = path(__dirname, ".env");

console.log(envFile);
```

## Example for CommonJS usage

CommonJS should pass `__dirname` as the first argument:

```js
const path = require('@purinton/path');

// Get the absolute path to a .env file in the same directory as this file
const envFile = path(__dirname, '.env');

console.log(envFile);
```

## API

### getCurrentFilename(metaOrDir?: ImportMeta | string): string

Returns the absolute path to the current file or directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string

Returns the absolute path to the current directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### default path(metaOrDir: ImportMeta | string, ...segments: string[]): string

Joins the current dirname (from `import.meta` or a string) with provided segments to form an absolute path.
