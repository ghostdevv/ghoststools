import * as assert from 'uvu/assert';
import { resolve } from 'path';
import { test } from 'uvu';

import { readdirRecursive } from '../../dist/index.js';

test('fn works', () => {
    const files = readdirRecursive('tests/fs/testFiles');

    assert.equal(files, [
        resolve('tests/fs/testFiles/_ignored/test.txt'),
        resolve('tests/fs/testFiles/_ignored.txt'),
        resolve('tests/fs/testFiles/test.txt'),
        resolve('tests/fs/testFiles/testdir/test.txt'),
    ]);
});

test.run();
