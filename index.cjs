const { fileURLToPath } = require('url');
const { dirname: pathDirname, join: pathJoin } = require('path');

/**
 * Returns the current filename in both CJS and Jest environments.
 *
 * @param {any} [meta] - Ignored in CJS
 * @returns {string} The absolute path to the current file.
 * @throws {Error} If the filename cannot be determined.
 */
function getCurrentFilename(meta) {
  if (typeof __filename !== 'undefined') return __filename;
  throw new Error(
    'Cannot determine current filename: run in Node.js environment with __filename.'
  );
}

/**
 * Returns the current dirname in both CJS and Jest environments.
 *
 * @param {any} [meta] - Ignored in CJS
 * @param {Function} [dirnameFn=path.dirname] - Optional dirname function
 * @returns {string} The absolute path to the current directory.
 * @throws {Error} If the dirname cannot be determined.
 */
function getCurrentDirname(meta, dirnameFn = pathDirname) {
  const filename = getCurrentFilename();
  if (!filename) {
    throw new Error('Cannot determine current dirname: filename is empty.');
  }
  return dirnameFn(filename);
}

/**
 * Joins the current dirname with additional path segments to produce an absolute path.
 *
 * @param {any} meta - Ignored in CJS
 * @param {...string} segments - Additional path segments to join
 * @returns {string} The absolute path
 * @throws {Error} If the current directory cannot be determined
 */
function pathFn(meta, ...segments) {
  const dir = getCurrentDirname();
  if (!dir) {
    throw new Error('Cannot resolve path: current directory is empty.');
  }
  return pathJoin(dir, ...segments);
}

module.exports = pathFn;
module.exports.default = pathFn;
module.exports.getCurrentFilename = getCurrentFilename;
module.exports.getCurrentDirname = getCurrentDirname;
