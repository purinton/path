// index.test.mjs: ESM API tests
import { jest } from '@jest/globals';
import path, { getCurrentFilename, getCurrentDirname } from './index.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { fileURLToPath } from 'url';
import { dirname as pathDirname } from 'path';

// Polyfill __dirname for ESM
const __dirname = pathDirname(fileURLToPath(import.meta.url));

describe('ESM API', () => {
    test('getCurrentFilename returns index.mjs path (import.meta)', () => {
        const filename = getCurrentFilename(import.meta);
        expect(filename.replace(/\\/g, '/').endsWith('/index.test.mjs')).toBe(true);
    });

    test('getCurrentFilename returns __dirname if string is passed', () => {
        const filename = getCurrentFilename(__dirname);
        expect(filename).toBe(__dirname);
    });

    test('getCurrentFilename throws without meta or string', () => {
        expect(() => getCurrentFilename()).toThrow(
            'Cannot determine current filename'
        );
    });

    test('getCurrentDirname returns correct dirname (import.meta)', () => {
        const dirnamePath = getCurrentDirname(import.meta);
        const expected = require('path').dirname(getCurrentFilename(import.meta));
        expect(dirnamePath).toBe(expected);
    });

    test('getCurrentDirname returns __dirname if string is passed', () => {
        const dirname = getCurrentDirname(__dirname);
        expect(dirname).toBe(__dirname);
    });

    test('getCurrentDirname with custom dirnameFn', () => {
        const stubFn = jest.fn().mockReturnValue('/fake/dir');
        expect(getCurrentDirname(import.meta, stubFn)).toBe('/fake/dir');
        expect(stubFn).toHaveBeenCalledWith(getCurrentFilename(import.meta));
    });

    test('path joins single segment correctly (import.meta)', () => {
        const p = path(import.meta, 'index.mjs');
        const expected = require('path').join(
            getCurrentDirname(import.meta),
            'index.mjs'
        );
        expect(p).toBe(expected);
    });

    test('path joins single segment correctly (__dirname)', () => {
        const p = path(__dirname, 'index.mjs');
        const expected = require('path').join(__dirname, 'index.mjs');
        expect(p).toBe(expected);
    });

    test('path returns dirname when no segments (import.meta)', () => {
        expect(path(import.meta)).toBe(getCurrentDirname(import.meta));
    });

    test('path returns dirname when no segments (__dirname)', () => {
        expect(path(__dirname)).toBe(__dirname);
    });

    test('path throws without meta or string', () => {
        expect(() => path()).toThrow('Cannot determine current filename');
    });
});