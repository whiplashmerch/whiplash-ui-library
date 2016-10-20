# whiplash-ui-library

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Official React component UI library for [Whiplash Merch](https://www.whiplashmerch.com/).

[build-badge]: https://travis-ci.com/whiplashmerch/whiplash-ui-library.svg?token=7sqecPgxJNHKkKxQk6v2&branch=master
[build]: https://travis-ci.org/whiplashmerch/whiplash-ui-library

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://coveralls.io/repos/github/whiplashmerch/whiplash-ui-library/badge.svg
[coveralls]: https://coveralls.io/github/whiplashmerch/whiplash-ui-library

### Installation
Run:
```
npm i whiplash-ui-library --save
```

Using Components:
```
import { Button } from 'whiplash-ui-library';
```

Live Example of all Available components:
[Whiplash UI Library Example](https://whiplashmerch.github.io/whiplash-ui-library/)

Updates:
[Whiplash UI Library Change log](https://github.com/whiplashmerch/whiplash-ui-library/blob/master/CHANGELOG.md)

### Testing w/ Jest
We are currently using [aphrodite](https://github.com/Khan/aphrodite) for all of
our styles and it causes failing tests which are definitely not ideal. For now,
if you are running Jest or enzyme and you notice weird test failures, add this to
the component tests that you are adding the library components to:

```
import { StyleSheetTestUtils } from 'aphrodite';


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
```

We are hoping to prevent this in the future and apologize beforehand for the probs.

<br />
*More Components Coming Soon!*
