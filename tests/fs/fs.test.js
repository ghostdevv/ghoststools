import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { readdirRecursive } from '../../dist/index.js';

test('fn works', () => {
    const files = readdirRecursive('tests/fs/testFiles');

    if (!files.every((p) => p.endsWith('test.txt')) || files.length != 2)
        throw new Error('Something went wrong');
});

test.run();
