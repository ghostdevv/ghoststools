/**
 * Normalises all paths to posix style
 */
export const posixify = (path: string) => path.replace(/\\/g, '/');
