# ember-cli-json-module

This addon adds support for importing JSON files into your Ember CLI app, using
[broccoli-json-module](https://github.com/ghempton/broccoli-json-module).

## Installation / Usage

From within your Ember CLI application, run the following:

```sh
ember install ember-cli-json-module
```

Then, any JSON files in either `app` or `tests` will be converted to ES6
modules that you can import like so:

```js
import myFixture from 'my-app/tests/fixtures/my-fixture';
```
