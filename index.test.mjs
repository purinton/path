// index.test.mjs: ESM API tests
import { jest } from '@jest/globals';
import path, { path as namedPath, getCurrentFilename, getCurrentDirname, pathUrl } from './index.mjs';
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

    test('path joins single segment correctly (default export)', () => {
        const p = path(import.meta, 'index.mjs');
        const expected = require('path').join(
            getCurrentDirname(import.meta),
            'index.mjs'
        );
        expect(p).toBe(expected);
    });

    test('path joins single segment correctly (named export)', () => {
        const p = namedPath(import.meta, 'index.mjs');
        const expected = require('path').join(
            getCurrentDirname(import.meta),
            'index.mjs'
        );
        expect(p).toBe(expected);
    });

    test('path joins single segment correctly (__dirname, default export)', () => {
        const p = path(__dirname, 'index.mjs');
        const expected = require('path').join(__dirname, 'index.mjs');
        expect(p).toBe(expected);
    });

    test('path joins single segment correctly (__dirname, named export)', () => {
        const p = namedPath(__dirname, 'index.mjs');
        const expected = require('path').join(__dirname, 'index.mjs');
        expect(p).toBe(expected);
    });

    test('path returns dirname when no segments (default export)', () => {
        expect(path(__dirname)).toBe(__dirname);
    });

    test('path returns dirname when no segments (named export)', () => {
        expect(namedPath(__dirname)).toBe(__dirname);
    });

    test('pathUrl returns file URL href for import.meta and segment', () => {
        const href = pathUrl(import.meta, 'index.mjs');
        expect(href.startsWith('file:')).toBe(true);
        expect(href.endsWith('/index.mjs')).toBe(true);
    });
    test('pathUrl returns file URL href for __dirname and segment', () => {
        const href = pathUrl(__dirname, 'index.mjs');
        expect(href.startsWith('file:')).toBe(true);
        expect(href.endsWith('/index.mjs')).toBe(true);
    });
    test('pathUrl returns file URL href for __dirname only', () => {
        const href = pathUrl(__dirname);
        expect(href.startsWith('file:')).toBe(true);
        expect(href.endsWith(__dirname.replace(/\\/g, '/'))).toBe(true);
    });
});