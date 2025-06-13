// index.test.js: CJS API tests
const pathCjs = require('./index.cjs');
const { path: namedPathCjs, getCurrentFilename: getFilenameCjs, getCurrentDirname: getDirnameCjs, pathUrl } = pathCjs;

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

  test('path (CJS) joins single segment correctly (default export)', () => {
    const p = pathCjs(__dirname, 'index.cjs');
    const expected = require('path').join(__dirname, 'index.cjs');
    expect(p).toBe(expected);
  });

  test('path (CJS) joins single segment correctly (named export)', () => {
    const p = namedPathCjs(__dirname, 'index.cjs');
    const expected = require('path').join(__dirname, 'index.cjs');
    expect(p).toBe(expected);
  });

  test('path (CJS) returns dirname when no segments (default export)', () => {
    expect(pathCjs(__dirname)).toBe(__dirname);
  });

  test('path (CJS) returns dirname when no segments (named export)', () => {
    expect(namedPathCjs(__dirname)).toBe(__dirname);
  });

  test('pathUrl returns file URL href for __dirname and segment', () => {
    const href = pathUrl(__dirname, 'index.cjs');
    expect(href.startsWith('file:')).toBe(true);
    expect(href.endsWith('/index.cjs')).toBe(true);
  });

  test('pathUrl returns file URL href for __dirname only', () => {
    const href = pathUrl(__dirname);
    expect(href.startsWith('file:')).toBe(true);
    expect(href.endsWith(__dirname.replace(/\\/g, '/'))).toBe(true);
  });
});
