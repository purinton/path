# path

[![npm version](https://img.shields.io/npm/v/@purinton/path.svg)](https://www.npmjs.com/package/@purinton/path) [![license](https://img.shields.io/github/license/purinton/path.svg)](LICENSE) [![build status](https://github.com/purinton/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/path/actions)

An ESM/Jest/Node friendly path utility.

## Install

```bash
npm install @purinton/path
```

## Example for module JS (ESM) usage

ESM should pass import.meta as the first argument:

```js
// Example for module JS (ESM) usage
// ESM should pass import.meta as the first argument
import path from '@purinton/path';

// Get the absolute path to a .env file in the same directory as this module
const envFile = path(import.meta, ".env");

// Print the resolved absolute path
console.log(envFile);
```

## Example for CommonJS usage

CommonJS should send undefined as the first argument:

```js
// Example for CommonJS usage
// CommonJS should send undefined as the first argument
const path = require('@purinton/path');

// Get the absolute path to a .env file in the same directory as this file
const envFile = path(undefined, '.env');

// Print the resolved absolute path
console.log(envFile);
```

## API

### getCurrentFilename(meta?: ImportMeta): string

Returns the absolute path to the current file; throws if unavailable.

### getCurrentDirname(meta?: ImportMeta, dirnameFn?: (path: string) => string): string

Returns the absolute path to the current directory; throws if unavailable.

### default path(meta: ImportMeta, ...segments: string[]): string

Joins the current dirname with provided segments to form an absolute path.
