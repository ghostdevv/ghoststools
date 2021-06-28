import * as assert from 'uvu/assert';
import { suite } from 'uvu';

import { posixify, readdirRecursive } from '../dist/index.js';

const pos = suite('posixify');

pos('fn works', () => {
    const str = `C:\\Users\\GHOST\\Desktop`;
    const normal = posixify(str);

    assert.match(normal, 'C:/Users/GHOST/Desktop');
});

pos.run();

const readdir = suite('readdir recursive');

readdir('fn works', () => {
    const x = readdirRecursive('tests/testFiles');
    console.log(x);
});

readdir.run();
