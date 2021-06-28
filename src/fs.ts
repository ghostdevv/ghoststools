import { lstatSync, readdirSync } from 'fs';
import { normalize, join, resolve } from 'path';

/**
 * Normalises all paths to posix style
 */
export const posixify = (path: string) => path.replace(/\\/g, '/');

/**
 * Get all files within a directory recursively (includes sub directories)
 */
export const readdirRecursive = (path: string): any => {
    const paths: string[] = readdirSync(resolve(path));

    return paths
        .map((p) => join(path, p))
        .map((p) => (lstatSync(p).isDirectory() ? readdirRecursive(p) : p))
        .flat();
};
