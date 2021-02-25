# coffee-api.js

> API Wrapper for https://coffee.alexflipnote.dev

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/coffee-api.js"><img src="https://img.shields.io/npm/v/coffee-api.js.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/coffee-api.js"><img src="https://img.shields.io/npm/dt/coffee-api.js?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/Shukaaku/coffee-api.js"><img src="https://david-dm.org/Shukaaku/coffee-api.js/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/coffee-api.js/"><img src="https://nodei.co/npm/coffee-api.js.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Features

- Actually maintained
- Uses async/await

## Install

```bash
yarn add coffee-api.js
```

## Usage

```js
const { getBuffer, getURL } = require('coffee-api.js');

(async () => {
	await getBuffer(); // returns an image buffer
	await getURL(); // returns an image url
})();
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**coffee-api.js** © [1chiSensei](https://github.com/1chiSensei), Released under the [Apache-2.0](https://github.com/Shukaaku/coffee-api.js/blob/main/LICENSE) License.<br>
Authored and maintained by 1chiSensei.

> GitHub [@1chiSensei](https://github.com/1chiSensei)