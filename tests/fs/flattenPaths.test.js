import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { flattenPaths } from '../../dist/index.js';

test('fn works', () => {
    const paths = flattenPaths('tests/fs/testFiles');

    assert.equal(paths, [
        'tests/fs/testFiles/test.txt',
        'tests/fs/testFiles/testdir/test.txt',
    ]);
});

test.run();
