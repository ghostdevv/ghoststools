import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { stripExt } from '../../dist/index.js';

test('test 1', () => {
    const str = `/home/ghost/pog.js`;
    const normal = stripExt(str);

    assert.match(normal, '/home/ghost/pog');
});

test('test 2', () => {
    const str = `C:\\Users\\GHOST\\Desktop\\pog.txt`;
    const normal = stripExt(str);

    assert.match(normal, 'C:\\Users\\GHOST\\Desktop\\pog');
});

test.run();
