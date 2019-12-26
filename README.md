# darken_color.js

Provides methods to parse color names or color values and lighten or darken them by
the specified percentage.

Distributed as an NPM module.

## API

### `darken(color, amount)`

Darkens the given color (given as a color name or HEX color value) by a given percent value (as a string).

Params:

* `color` - string; color to darken, color name or color value in HEX format
* `amount` - string; The darken percentage. A string with either a float number, integer number or integer number and a percent sign ('%')

Returns darkened color in HEX format.

### `lighten(color, amount)`

Lightens the given color by a given percentage amount.
Alias for `darken(color, '-' + amount)`.

Params:

* `color` - string; color to lighten, color name or color value in HEX format
* `amount` - string; The lightening percentage. A string with either a float number, integer number or integer number and a percent sign ('%')

Returns lightened color in HEX format.

### `HSL2RGB(h, s, l)`

Converts color as a triple of H (hue), S (saturation) and L (lighting) values to RGB triple.

Params:

* `h`, `s`, `l` - numbers; corresponding color component

Returns an object with the shape of `{ r, g, b }`.

### `RGB2HEX(r, g, b)`

Converts color as a triple of RGB values to a HEX string.

Params:

* `r`, `g`, `b` - numbers; corresponding color component

Returns a string representation of a color.

### `NAME2RGB(name)`

Converts color name to a RGB triple.

Params:

* `name` - string; color name

Supported colors:

`aliceblue`, `antiquewhite`, `aqua`, `aquamarine`, `azure`, `beige`, `bisque`, `black`, `blanchedalmond`, `blue`, `blueviolet`, `brown`, `burlywood`, `cadetblue`, `chartreuse`, `chocolate`, `coral`, `cornflowerblue`, `cornsilk`, `crimson`, `cyan`, `darkblue`, `darkcyan`, `darkgoldenrod`, `darkgray`, `darkgreen`, `darkgrey`, `darkkhaki`, `darkmagenta`, `darkolivegreen`, `darkorange`, `darkorchid`, `darkred`, `darksalmon`, `darkseagreen`, `darkslateblue`, `darkslategray`, `darkslategrey`, `darkturquoise`, `darkviolet`, `deeppink`, `deepskyblue`, `dimgray`, `dimgrey`, `dodgerblue`, `firebrick`, `floralwhite`, `forestgreen`, `fuchsia`, `gainsboro`, `ghostwhite`, `gold`, `goldenrod`, `gray`, `green`, `greenyellow`, `grey`, `honeydew`, `hotpink`, `indianred`, `indigo`, `ivory`, `khaki`, `lavender`, `lavenderblush`, `lawngreen`, `lemonchiffon`, `lightblue`, `lightcoral`, `lightcyan`, `lightgoldenrodyellow`, `lightgray`, `lightgreen`, `lightgrey`, `lightpink`, `lightsalmon`, `lightseagreen`, `lightskyblue`, `lightslategray`, `lightslategrey`, `lightsteelblue`, `lightyellow`, `lime`, `limegreen`, `linen`, `magenta`, `maroon`, `mediumaquamarine`, `mediumblue`, `mediumorchid`, `mediumpurple`, `mediumseagreen`, `mediumslateblue`, `mediumspringgreen`, `mediumturquoise`, `mediumvioletred`, `midnightblue`, `mintcream`, `mistyrose`, `moccasin`, `navajowhite`, `navy`, `oldlace`, `olive`, `olivedrab`, `orange`, `orangered`, `orchid`, `palegoldenrod`, `palegreen`, `paleturquoise`, `palevioletred`, `papayawhip`, `peachpuff`, `peru`, `pink`, `plum`, `powderblue`, `purple`, `red`, `rosybrown`, `royalblue`, `saddlebrown`, `salmon`, `sandybrown`, `seagreen`, `seashell`, `sienna`, `silver`, `skyblue`, `slateblue`, `slategray`, `slategrey`, `snow`, `springgreen`, `steelblue`, `tan`, `teal`, `thistle`, `tomato`, `turquoise`, `violet`, `wheat`, `white`, `whitesmoke`, `yellow`, `yellowgreen`

Returns an object with the shape of `{ r, g, b }`.

## Examples

```js
    import { darken, lighten } from 'darken_colors';

    darken('lightgreen', '0.1'); // -> #bcf4bc
    darken('lightgreen', '10'); // -> #bcf4bc
    darken('#90EE90', '10'); // -> #bcf4bc
    darken('#9e9', '10%'); // ->  #c4f5c4

    lighten('lightgreen', 10); // -> #bcf4bc
```

## Tests

Run `npm install && npm test` in order to run Jest tests.
