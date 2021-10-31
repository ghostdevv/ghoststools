import * as assert from 'uvu/assert';
import { test } from 'uvu';

import { stripTrailingSlash } from '../../dist/index.js';

test('removes /', () => {
    const str = `/home/ghost/pog/`;
    const normal = stripTrailingSlash(str);

    assert.match(normal, '/home/ghost/pog');
});

test('removes \\', () => {
    const str = `C:\\Users\\GHOST\\Desktop\\`;
    const normal = stripTrailingSlash(str);

    assert.match(normal, 'C:\\Users\\GHOST\\Desktop');
});

test('removes multiple', () => {
    const str = `/home/ghost/pog////\\\\\\`;
    const normal = stripTrailingSlash(str);

    assert.match(normal, '/home/ghost/pog');
});

test.run();
