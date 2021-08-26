import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { castToArray } from '../dist/index.js';

test('fn works', () => {
    const item = castToArray(1);
    const item2 = castToArray([1]);

    if (!Array.isArray(item) || !Array.isArray(item2))
        throw new TypeError('not array');
});

test.run();
