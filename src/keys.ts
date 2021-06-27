export const removeKeys = (object: object, keys: string | string[]) => {
    if (!Array.isArray(keys)) keys = [keys];

    const entries = Object.entries(object);

    return entries.reduce((obj, [k, v]) => {
        if (keys.includes(k)) return obj;
        else return { ...obj, [k]: v };
    }, {});
};
