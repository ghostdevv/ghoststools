import { lstatSync, readdirSync, existsSync, statSync } from 'fs';
import { castToArray } from '../cast';
import { join, resolve } from 'path';

interface ReadDirOptions {
    /**
     * @param {string} file the file/directory name
     * @param {string} path the absolute path of the file/directory
     */
    filter?: (file: string, path: string) => boolean;
}

/**
 * Get all files within a directory recursively (includes sub directories)
 */
export const readdirRecursive = (
    cwd: string,
    options: ReadDirOptions = {},
): string[] => {
    const paths: string[] = [];

    for (const raw of readdirSync(cwd)) {
        const path = resolve(cwd, raw);
        const stat = statSync(path);

        if (options.filter && !options.filter(raw, path)) continue;

        if (stat.isDirectory()) paths.push(...readdirRecursive(path, options));
        else paths.push(path);
    }

    return paths;
};

/**
 * Takes in path(s) and flattens down to a single array of files (turning directories into paths)
 */
export const flattenPaths = (
    input: string | string[],
    options: ReadDirOptions = {},
): string[] =>
    castToArray<string>(input)
        .map((path) => {
            if (!existsSync(path))
                throw new Error(`File ${path} does not exist`);

            const isDirectory = lstatSync(path).isDirectory();
            if (!isDirectory) return path;

            return readdirRecursive(path, options);
        })
        .flat();
