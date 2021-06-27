import * as assert from 'uvu/assert';
import { suite } from 'uvu';

import { removeKeys } from '../dist/index.js';

const rk = suite('remove keys');

rk('fn works', () => {
    const obj = {
        test: true,
        test2: true,
        test3: false,
    };

    const exp = removeKeys(obj, ['test', 'test3']);

    assert.equal(exp, { test2: true });
});

rk("doesn't mutate object", () => {
    const obj = {
        test: true,
        test2: true,
        test3: false,
    };

    const exp = removeKeys(obj, ['test', 'test3']);

    assert.equal(obj, {
        test: true,
        test2: true,
        test3: false,
    });
});

rk.run();
