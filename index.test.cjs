// index.test.js: CJS API tests
const pathCjs = require('./index.cjs');
const { getCurrentFilename: getFilenameCjs, getCurrentDirname: getDirnameCjs } = pathCjs;

describe('CJS API', () => {
  test('getCurrentFilename (CJS) returns index.cjs path (undefined)', () => {
    const filename = getFilenameCjs();
    expect(filename.endsWith('index.cjs')).toBe(true);
  });

  test('getCurrentFilename (CJS) returns index.cjs path (__dirname)', () => {
    const filename = getFilenameCjs(__dirname);
    expect(filename).toBe(__dirname);
  });

  test('getCurrentDirname (CJS) returns correct dirname (undefined)', () => {
    const dirname = getDirnameCjs();
    const expected = require('path').dirname(getFilenameCjs());
    expect(dirname).toBe(expected);
  });

  test('getCurrentDirname (CJS) returns correct dirname (__dirname)', () => {
    const dirname = getDirnameCjs(__dirname);
    expect(dirname).toBe(__dirname);
  });

  test('path (CJS) joins single segment correctly (undefined)', () => {
    const p = pathCjs(undefined, 'index.cjs');
    const expected = require('path').join(getDirnameCjs(), 'index.cjs');
    expect(p).toBe(expected);
  });

  test('path (CJS) joins single segment correctly (__dirname)', () => {
    const p = pathCjs(__dirname, 'index.cjs');
    const expected = require('path').join(__dirname, 'index.cjs');
    expect(p).toBe(expected);
  });

  test('path (CJS) returns dirname when no segments (undefined)', () => {
    expect(pathCjs(undefined)).toBe(getDirnameCjs());
  });

  test('path (CJS) returns dirname when no segments (__dirname)', () => {
    expect(pathCjs(__dirname)).toBe(__dirname);
  });
});
