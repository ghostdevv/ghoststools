import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { readdirRecursive } from '../../dist/index.js';

test('fn works', () => {
    const x = readdirRecursive('tests/fs/testFiles');
    console.log(x);
});

test.run();
