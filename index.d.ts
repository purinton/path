/**
 * Returns the current filename from import.meta, a string (dirname), or __filename.
 * @param metaOrDir import.meta (ESM), a string (dirname, e.g. __dirname), or undefined
 * @returns Absolute path to the current file or directory.
 */
export function getCurrentFilename(metaOrDir?: ImportMeta | string): string;

/**
 * Returns the current dirname from import.meta, a string (dirname), or __dirname.
 * @param metaOrDir import.meta (ESM), a string (dirname, e.g. __dirname), or undefined
 * @param dirnameFn Optional custom dirname function.
 * @returns Absolute path to the current directory.
 */
export function getCurrentDirname(
  metaOrDir?: ImportMeta | string,
  dirnameFn?: (path: string) => string
): string;

/**
 * Joins the current dirname with provided segments to form an absolute path.
 * @param metaOrDir import.meta (ESM), a string (dirname, e.g. __dirname), or undefined
 * @param segments Path segments to join.
 * @returns Absolute path string.
 */
export const path: (
  metaOrDir: ImportMeta | string,
  ...segments: string[]
) => string;

/**
 * Converts a resolved path to a file URL href string for dynamic import compatibility.
 * @param metaOrDir import.meta (ESM), a string (dirname, e.g. __dirname), or undefined
 * @param segments Path segments to join.
 * @returns File URL href string.
 */
export function pathUrl(metaOrDir: ImportMeta | string, ...segments: string[]): string;

export default path;
