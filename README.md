# darken_color.js

Provide methods to parse color names/values and lightens or darkens it by passed amount value. Supports both Node and browser environment.

## Usage examples

    darken('lightgreen', '0.1'); // -> #bcf4bc
    darken('lightgreen', '10'); // -> #bcf4bc
    darken('#90EE90', '10'); // -> #bcf4bc
    darken('#9e9', '10%'); // ->  #c4f5c4
    lighten('lightgreen', 10); // -> #bcf4bc

## Tests

Run `npm install && npm run-script test` in order to run Jasmine tests.
