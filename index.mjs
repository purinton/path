import { fileURLToPath } from 'url';
import { dirname as pathDirname, join as pathJoin } from 'path';

/**
 * Returns the current filename in both ESM and Jest environments.
 *
 * @param {ImportMeta} [meta] - The import.meta object (optional in Jest)
 * @returns {string} The absolute path to the current file.
 * @throws {Error} If the filename cannot be determined.
 */
export const getCurrentFilename = (meta) => {
    if (meta && meta.url) return fileURLToPath(meta.url);
    if (typeof __filename !== 'undefined') return __filename;
    throw new Error(
        'Cannot determine current filename: provide import.meta or run in Node.js environment with __filename.'
    );
};

/**
 * Returns the current dirname in both ESM and Jest environments.
 *
 * @param {ImportMeta} [meta] - The import.meta object (optional in Jest)
 * @param {Function} [dirnameFn=path.dirname] - Optional dirname function (default: path.dirname)
 * @returns {string} The absolute path to the current directory.
 * @throws {Error} If the dirname cannot be determined.
 */
export const getCurrentDirname = (meta, dirnameFn = pathDirname) => {
    const filename = getCurrentFilename(meta);
    if (!filename) {
        throw new Error('Cannot determine current dirname: filename is empty.');
    }
    return dirnameFn(filename);
};

/**
 * Joins the current dirname with additional path segments to produce an absolute path.
 *
 * Usage:
 *   import path from '@purinton/path';
 *   const absPath = path(import.meta, '..', 'file.txt');
 *
 * @param {ImportMeta} meta - The import.meta object (or undefined in Jest)
 * @param {...string} segments - Additional path segments to join
 * @returns {string} The absolute path
 * @throws {Error} If the current directory cannot be determined
 */
export default function path(meta, ...segments) {
    const dir = getCurrentDirname(meta);
    if (!dir) {
        throw new Error('Cannot resolve path: current directory is empty.');
    }
    return pathJoin(dir, ...segments);
}
