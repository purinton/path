const { fileURLToPath, pathToFileURL } = require('url');
const { dirname: pathDirname, join: pathJoin } = require('path');

/**
 * Returns the current filename from import.meta, a string, or __filename.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @returns {string} Absolute path to the current file or directory
 */
function getCurrentFilename(metaOrDir) {
  if (typeof metaOrDir === 'string') return metaOrDir;
  if (metaOrDir && metaOrDir.url) return fileURLToPath(metaOrDir.url);
  if (typeof __filename !== 'undefined') return __filename;
  throw new Error(
    'Cannot determine current filename: provide import.meta, __dirname, or run in Node.js environment with __filename.'
  );
}

/**
 * Returns the current dirname from import.meta, a string, or __dirname.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {Function} [dirnameFn=path.dirname] - Optional dirname function
 * @returns {string} Absolute path to the current directory
 */
function getCurrentDirname(metaOrDir, dirnameFn = pathDirname) {
  if (typeof metaOrDir === 'string') return metaOrDir;
  const filename = getCurrentFilename(metaOrDir);
  if (!filename) {
    throw new Error('Cannot determine current dirname: filename is empty.');
  }
  return dirnameFn(filename);
}

/**
 * Joins the current dirname with additional path segments to produce an absolute path.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {...string} segments - Additional path segments to join
 * @returns {string} The absolute path
 */
const path = (metaOrDir, ...segments) => {
  const dir = getCurrentDirname(metaOrDir);
  if (!dir) {
    throw new Error('Cannot resolve path: current directory is empty.');
  }
  return pathJoin(dir, ...segments);
};

/**
 * Converts a resolved path to a file URL for dynamic import compatibility.
 * @param {any} metaOrDir - import.meta, a string (dirname), or undefined
 * @param {...string} segments - Additional path segments to join
 * @returns {URL} The file URL
 */
const pathUrl = (metaOrDir, ...segments) => {
  return pathToFileURL(path(metaOrDir, ...segments)).href;
};

module.exports = path;
module.exports.default = path;
module.exports.path = path;
module.exports.getCurrentFilename = getCurrentFilename;
module.exports.getCurrentDirname = getCurrentDirname;
module.exports.pathUrl = pathUrl;
