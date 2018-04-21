ember-copy
==============================================================================

This addon supplies a copy() function and Copyable mixin to replace the function and mixin now being deprecated in Ember.js. 

Installation
------------------------------------------------------------------------------

```
ember install ember-copy
```


Usage
------------------------------------------------------------------------------

To use the addon, wherever you were using:

`import {copy, Copyable} from '@ember/internals'`

instead use:

`import {copy, Copyable} from 'ember-copy'`



Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https:\\github.com\emberjs\ember-copy`
* `cd ember-copy`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
