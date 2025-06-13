# @purinton/path [![Purinton Dev](https://purinton.us/logos/purinton_96.png)](https://discord.gg/QSBxQnX7PF)

[![npm version](https://img.shields.io/npm/v/@purinton/path.svg)](https://www.npmjs.com/package/@purinton/path)
[![license](https://img.shields.io/github/license/purinton/path.svg)](LICENSE)
[![build status](https://github.com/purinton/path/actions/workflows/nodejs.yml/badge.svg)](https://github.com/purinton/path/actions)

> An ESM/Jest/Node-friendly path utility for resolving file and directory paths in both CommonJS and ESM environments.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ESM Example](#esm-example)
  - [CommonJS Example](#commonjs-example)
- [API](#api)
- [TypeScript](#typescript)
- [License](#license)

## Features

- Unified API for ESM and CommonJS: pass either `import.meta` or a string (like `__dirname`)
- Works seamlessly in Node.js, Jest, and modern ESM environments
- TypeScript type definitions included
- Simple, dependency-free, and well-tested

## Installation

```bash
npm install @purinton/path
```

## Usage

### ESM Example

```js
// Example for ESM (module JS) usage
// Import the path utility from the installed package
import path from '@purinton/path';
// or import { path } from '@purinton/path'; // identical

// for ESM, we need to pass import.meta
const envFile = path(import.meta, ".env");
console.log(envFile);
```

### CommonJS Example

```js
// Example for CommonJS usage
// Import the path utility from the installed package
const path = require('@purinton/path');
// or const { path } = require('@purinton/path'); // identical

// for CommonJS, we need to pass __dirname
const envFile = path(__dirname, '.env');
console.log(envFile);
```

## API

### `getCurrentFilename(metaOrDir?: ImportMeta | string): string`

Returns the absolute path to the current file or directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string`

Returns the absolute path to the current directory. Pass `import.meta` (ESM) or a string (e.g. `__dirname`). Throws if unavailable.

### `default path(metaOrDir: ImportMeta | string, ...segments: string[]): string`

Joins the current dirname (from `import.meta` or a string) with provided segments to form an absolute path.

## TypeScript

Type definitions are included:

```ts
export function getCurrentFilename(metaOrDir?: ImportMeta | string): string;
export function getCurrentDirname(metaOrDir?: ImportMeta | string, dirnameFn?: (path: string) => string): string;
export const path: (metaOrDir: ImportMeta | string, ...segments: string[]) => string;
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
