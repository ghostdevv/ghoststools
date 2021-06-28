# GHOSTs Tools

[![](https://img.shields.io/npm/v/ghoststools?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/ghoststools)
[![](https://img.shields.io/static/v1?label=Project%20Creator&message=GHOST&color=informational&style=for-the-badge)](https://ghostdev.xyz)
[![](https://img.shields.io/github/workflow/status/ghostdevv/ghoststools/Test%20Codebase/main?style=for-the-badge)](https://github.com/ghostdevv/ghoststools)

This package is simply a collection of functions (tools) that I use often, I plan on adding to this package often and heavily sticking to semver (as you should).

# Full Documentaiton
[Documentation can be viewed here](https://ghostdevv.github.io/ghoststools/) - If docs seem out of date use ctrl + f5 to "hard refresh"

# Example use
```js
import { removeKeys } from 'ghoststools'; // You can view all exported members on the docs

const inputObject = { test: true, run: () => {} };
const options = removeKeys(inputObject, 'run');
```