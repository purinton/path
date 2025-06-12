# path

[![npm version](https://img.shields.io/npm/v/@purinton/path.svg)](https://www.npmjs.com/package/@purinton/path) [![license](https://img.shields.io/github/license/purinton/path.svg)](LICENSE) [![build status](https://github.com/purinton/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/path/actions)

An ESM/Jest/Node friendly path utility.

## Install

```bash
npm install @purinton/path
```

## Usage (ESM)

```js
import path, { getCurrentDirname } from '@purinton/path';
const currentDir = getCurrentDirname(import.meta);
console.log(path(import.meta, '..', 'file.txt'));
```

## Usage (CJS)

```js
const path = require('@purinton/path');
console.log(path(undefined, '..', 'file.txt'));
```

## API

### getCurrentFilename(meta?: ImportMeta): string

Returns the absolute path to the current file; throws if unavailable.

### getCurrentDirname(meta?: ImportMeta, dirnameFn?: (path: string) => string): string

Returns the absolute path to the current directory; throws if unavailable.

### default path(meta: ImportMeta, ...segments: string[]): string

Joins the current dirname with provided segments to form an absolute path.
