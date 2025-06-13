# [![Purinton Dev](https://purinton.us/logos/brand.png)](https://discord.gg/QSBxQnX7PF)

## @purinton/path [![npm version](https://img.shields.io/npm/v/@purinton/path.svg)](https://www.npmjs.com/package/@purinton/path)[![license](https://img.shields.io/github/license/purinton/path.svg)](LICENSE)[![build status](https://github.com/purinton/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/path/actions)

> An ESM/Jest/Node-friendly path utility for resolving file and directory paths in both CommonJS and ESM environments.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
  - [Dynamic Import Example](#dynamic-import-example)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Unified API for ESM and CommonJS: pass either `import.meta` or a string (like `__dirname`)
- Works seamlessly in Node.js, Jest, and modern ESM environments
- TypeScript type definitions included
- Simple, dependency-free, and well-tested
- **NEW:** `pathUrl` helper for cross-platform dynamic import

## Installation

```bash
npm install @purinton/path
```

## Usage

### ESM Example

```js
import path, { pathUrl } from '@purinton/path';

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);

// Get a file URL href for dynamic import
const envFileUrl = pathUrl(import.meta, ".env");
console.log(envFileUrl);
// import(envFileUrl).then(mod => ...);
```

### CommonJS Example

```js
const { path, pathUrl } = require('@purinton/path');

// for CommonJS, we need to pass __dirname
const envFile = path(__dirname, '.env');
console.log(envFile);

// Get a file URL href for dynamic import
const envFileUrl = pathUrl(__dirname, '.env');
console.log(envFileUrl);
// import(envFileUrl).then(mod => ...); // if using ESM loader in CJS
```

### Dynamic Import Example

```js
// ESM
import { pathUrl } from '@purinton/path';
const mod = await import(pathUrl(import.meta, './my-module.mjs'));

// CommonJS (with ESM loader)
const { pathUrl } = require('@purinton/path');
const mod = await import(pathUrl(__dirname, './my-module.mjs'));
```

## API

### `getCurrentFilename(metaOrDir?: ImportMeta | string): string`

Returns the absolute path to the current file or directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string`

Returns the absolute path to the current directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `default path(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Joins the current dirname (from `import.meta` or a string) with provided segments to form an absolute path.

### `pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Returns a file URL href string for the resolved path, suitable for use with dynamic `import()` on all platforms.

## TypeScript

Type definitions are included:

```ts
export function getCurrentFilename(metaOrDir?: ImportMeta | string): string;
export function getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string;
export const path: (metaOrDir: ImportMeta | string, ...segments: string[]) => string;
export function pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string;
export default path;
```

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://purinton.us/logos/discord_96.png)](https://discord.gg/QSBxQnX7PF)[![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

**[Purinton Dev on Discord](https://discord.gg/QSBxQnX7PF)**

## License

[MIT © 2025 Russell Purinton](LICENSE)

## Links

- [GitHub](https://github.com/purinton/path)
- [npm](https://www.npmjs.com/package/@purinton/path)
- [Discord](https://discord.gg/QSBxQnX7PF)
