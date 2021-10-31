import { lstatSync, readdirSync, existsSync } from 'fs';
import { join, resolve, extname } from 'path';
import { normalize } from 'path/posix';
import { castToArray } from './cast';

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
export const stripExt = (path: string) => path.slice(0, -extname(path).length);

/**
 * Get all files within a directory recursively (includes sub directories)
 */
export const readdirRecursive = (path: string): string[] => {
    const paths: string[] = readdirSync(resolve(path));

    return paths
        .map((p) => join(path, p))
        .map((p) => (lstatSync(p).isDirectory() ? readdirRecursive(p) : p))
        .flat();
};

/**
 * Takes in path(s) and flattens down to a single array of files (turning directories into paths)
 */
export const flattenPaths = (input: string | string[]): string[] =>
    castToArray<string>(input)
        .map((p) => {
            const path = posixify(p);

            if (!existsSync(path))
                throw new Error(`File ${path} does not exist`);

            const isDirectory = lstatSync(path).isDirectory();
            if (!isDirectory) return path;

            return readdirRecursive(path);
        })
        .flat();
