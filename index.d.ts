/**
 * Returns the current filename in both ESM and Jest environments.
 * @param meta Optional ImportMeta object (in ESM).
 * @returns Absolute path to the current file.
 */
export function getCurrentFilename(meta?: ImportMeta): string;

/**
 * Returns the current dirname in both ESM and Jest environments.
 * @param meta Optional ImportMeta object (in ESM).
 * @param dirnameFn Optional custom dirname function.
 * @returns Absolute path to the current directory.
 */
export function getCurrentDirname(
  meta?: ImportMeta,
  dirnameFn?: (path: string) => string
): string;

/**
 * Joins the current dirname with provided segments to form an absolute path.
 * @param meta ImportMeta object (in ESM) or undefined (in CJS).
 * @param segments Path segments to join.
 * @returns Absolute path string.
 */
export default function path(
  meta: ImportMeta,
  ...segments: string[]
): string;
