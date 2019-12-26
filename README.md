# darken_color.js

Provides methods to parse color names or color values and lighten or darken them by
the specified percentage.

Distributed as an NPM module.

## Usage examples

```js
    import { darken, lighten } from 'darken_colors';

    darken('lightgreen', '0.1'); // -> #bcf4bc
    darken('lightgreen', '10'); // -> #bcf4bc
    darken('#90EE90', '10'); // -> #bcf4bc
    darken('#9e9', '10%'); // ->  #c4f5c4

    lighten('lightgreen', 10); // -> #bcf4bc
```

## Tests

Run `npm install && npm run-script test` in order to run Jest tests.
