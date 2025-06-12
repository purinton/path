// index.test.js: CJS API tests
const pathCjs = require('./index.cjs');
const { getCurrentFilename: getFilenameCjs, getCurrentDirname: getDirnameCjs } = pathCjs;

describe('CJS API', () => {
  test('getCurrentFilename (CJS) returns index.cjs path', () => {
    const filename = getFilenameCjs();
    expect(filename.endsWith('index.cjs')).toBe(true);
  });

  test('getCurrentDirname (CJS) returns correct dirname', () => {
    const dirname = getDirnameCjs();
    const expected = require('path').dirname(getFilenameCjs());
    expect(dirname).toBe(expected);
  });

  test('path (CJS) joins single segment correctly', () => {
    const p = pathCjs(undefined, 'index.cjs');
    const expected = require('path').join(getDirnameCjs(), 'index.cjs');
    expect(p).toBe(expected);
  });

  test('path (CJS) returns dirname when no segments', () => {
    expect(pathCjs(undefined)).toBe(getDirnameCjs());
  });
});
