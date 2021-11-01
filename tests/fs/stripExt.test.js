import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { stripExt } from '../../dist/index.js';

test('works', () => {
    const str = `/home/ghost/pog.js`;
    const normal = stripExt(str);

    assert.match(normal, '/home/ghost/pog');
});

test("doesn't break if there is no ext", () => {
    const str = `/home/ghost/pog`;
    const normal = stripExt(str);

    assert.match(normal, '/home/ghost/pog');
});

test("doesn't remove non exts", () => {
    const str = `/home/ghost/pog.js/pog.test.js`;
    const normal = stripExt(str);

    assert.match(normal, '/home/ghost/pog.test');
});

test.run();
