# timelimit

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Reject promises on timeout.

## Installation
```
npm install --save timelimit
```

## Usage
Basic usage:
```javascript
import timelimit from 'timelimit'

const req = timelimit(
  fetch('https://example.com'),
  10000, // 10 seconds
  {
    rejectOnTimeout: true, // default is true
    errorMessage: 'timeout', // timeout error message (thrown if rejectOnTimeout is true)
  },
)
```

[npm-url]: https://npmjs.org/package/timelimit
[downloads-image]: http://img.shields.io/npm/dm/timelimit.svg
[npm-image]: http://img.shields.io/npm/v/timelimit.svg
[david-dm-url]:https://david-dm.org/inker/timelimit
[david-dm-image]:https://david-dm.org/inker/timelimit.svg
[david-dm-dev-url]:https://david-dm.org/inker/timelimit#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/timelimit/dev-status.svg
