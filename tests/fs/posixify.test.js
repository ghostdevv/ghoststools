import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { posixify } from '../../dist/index.js';

test('fn works', () => {
    const str = `C:\\Users\\GHOST\\Desktop`;
    const normal = posixify(str);

    assert.match(normal, 'C:/Users/GHOST/Desktop');
});

test.run();
