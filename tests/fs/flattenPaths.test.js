import * as assert from 'uvu/assert';
import { resolve } from 'path';
import { test } from 'uvu';

import { flattenPaths } from '../../dist/index.js';

test('fn works', () => {
    const paths = flattenPaths('tests/fs/testFiles');

    assert.equal(paths, [
        resolve('tests/fs/testFiles/test.txt'),
        resolve('tests/fs/testFiles/testdir/test.txt'),
    ]);
});

test.run();
