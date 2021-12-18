import { normalize, extname } from 'path';

/**
 * Normalises all paths to posix style
 */
export const posixify = (path: string): string => path.replace(/\\/g, '/');

/**
 * Removes the trailing slash on a path - removes both \ and /
 */
export const stripTrailingSlash = (path: string) =>
    path.replace(/\\+$/, '').replace(/\/+$/, '');

/**
 * This combines path.normalize and stripTrailingSlash to fully normalize a path
 */
export const fullNormalize = (path: string) =>
    stripTrailingSlash(normalize(path));

/**
 * This removes the file extension from the path
 */
export const stripExt = (path: string) =>
    path.slice(0, -extname(path).length || undefined);
