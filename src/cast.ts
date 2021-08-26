/**
 * Cast a item to a array of that item
 */
export const castToArray = <T>(item: T | T[]): T[] =>
    Array.isArray(item) ? item : [item];
