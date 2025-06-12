// index.test.mjs: ESM API tests
import { jest } from '@jest/globals';
import path, { getCurrentFilename, getCurrentDirname } from './index.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

describe('ESM API', () => {
    test('getCurrentFilename returns index.mjs path', () => {
        const filename = getCurrentFilename(import.meta);
        // Print the filename for debugging
        console.log('DEBUG getCurrentFilename(import.meta):', filename);
        expect(filename.replace(/\\/g, '/').endsWith('/index.test.mjs')).toBe(true);
    });

    test('getCurrentFilename throws without meta', () => {
        expect(() => getCurrentFilename()).toThrow(
            'Cannot determine current filename'
        );
    });

    test('getCurrentDirname returns correct dirname', () => {
        const dirnamePath = getCurrentDirname(import.meta);
        const expected = require('path').dirname(getCurrentFilename(import.meta));
        expect(dirnamePath).toBe(expected);
    });

    test('getCurrentDirname with custom dirnameFn', () => {
        const stubFn = jest.fn().mockReturnValue('/fake/dir');
        expect(getCurrentDirname(import.meta, stubFn)).toBe('/fake/dir');
        expect(stubFn).toHaveBeenCalledWith(getCurrentFilename(import.meta));
    });

    test('path joins single segment correctly', () => {
        const p = path(import.meta, 'index.mjs');
        const expected = require('path').join(
            getCurrentDirname(import.meta),
            'index.mjs'
        );
        expect(p).toBe(expected);
    });

    test('path returns dirname when no segments', () => {
        expect(path(import.meta)).toBe(getCurrentDirname(import.meta));
    });

    test('path throws without meta', () => {
        expect(() => path()).toThrow('Cannot determine current filename');
    });
});