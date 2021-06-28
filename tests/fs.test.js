import * as assert from 'uvu/assert';
import { suite } from 'uvu';

import { posixify } from '../dist/index.js';

const pos = suite('posixify');

pos('fn works', () => {
    const str = `C:\\Users\\GHOST\\Desktop`;
    const normal = posixify(str);

    assert.match(normal, 'C:/Users/GHOST/Desktop');
});

pos.run();
