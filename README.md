# darken_color

Provides methods to parse color names or color values and lighten or darken them by
the specified percentage.

Distributed as an NPM module.

## Installing

First, you'll need to point your NPM and Yarn to Github repository by adding this line to your `.npmrc` file:

```
registry=https://npm.pkg.github.com/
```

Then install the package using NPM or Yarn:

```
yarn add @shybovycha/darken_color
```

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

* <div style="display: inline-block; width: 1em; height: 1em; background: aliceblue"></div> <code>aliceblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: antiquewhite"></div> <code>antiquewhite</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: aqua"></div> <code>aqua</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: aquamarine"></div> <code>aquamarine</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: azure"></div> <code>azure</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: beige"></div> <code>beige</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: bisque"></div> <code>bisque</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: black"></div> <code>black</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: blanchedalmond"></div> <code>blanchedalmond</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: blue"></div> <code>blue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: blueviolet"></div> <code>blueviolet</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: brown"></div> <code>brown</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: burlywood"></div> <code>burlywood</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: cadetblue"></div> <code>cadetblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: chartreuse"></div> <code>chartreuse</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: chocolate"></div> <code>chocolate</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: coral"></div> <code>coral</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: cornflowerblue"></div> <code>cornflowerblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: cornsilk"></div> <code>cornsilk</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: crimson"></div> <code>crimson</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: cyan"></div> <code>cyan</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkblue"></div> <code>darkblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkcyan"></div> <code>darkcyan</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkgoldenrod"></div> <code>darkgoldenrod</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkgray"></div> <code>darkgray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkgreen"></div> <code>darkgreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkgrey"></div> <code>darkgrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkkhaki"></div> <code>darkkhaki</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkmagenta"></div> <code>darkmagenta</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkolivegreen"></div> <code>darkolivegreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkorange"></div> <code>darkorange</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkorchid"></div> <code>darkorchid</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkred"></div> <code>darkred</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darksalmon"></div> <code>darksalmon</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkseagreen"></div> <code>darkseagreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkslateblue"></div> <code>darkslateblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkslategray"></div> <code>darkslategray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkslategrey"></div> <code>darkslategrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkturquoise"></div> <code>darkturquoise</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: darkviolet"></div> <code>darkviolet</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: deeppink"></div> <code>deeppink</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: deepskyblue"></div> <code>deepskyblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: dimgray"></div> <code>dimgray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: dimgrey"></div> <code>dimgrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: dodgerblue"></div> <code>dodgerblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: firebrick"></div> <code>firebrick</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: floralwhite"></div> <code>floralwhite</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: forestgreen"></div> <code>forestgreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: fuchsia"></div> <code>fuchsia</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: gainsboro"></div> <code>gainsboro</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: ghostwhite"></div> <code>ghostwhite</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: gold"></div> <code>gold</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: goldenrod"></div> <code>goldenrod</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: gray"></div> <code>gray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: green"></div> <code>green</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: greenyellow"></div> <code>greenyellow</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: grey"></div> <code>grey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: honeydew"></div> <code>honeydew</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: hotpink"></div> <code>hotpink</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: indianred"></div> <code>indianred</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: indigo"></div> <code>indigo</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: ivory"></div> <code>ivory</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: khaki"></div> <code>khaki</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lavender"></div> <code>lavender</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lavenderblush"></div> <code>lavenderblush</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lawngreen"></div> <code>lawngreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lemonchiffon"></div> <code>lemonchiffon</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightblue"></div> <code>lightblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightcoral"></div> <code>lightcoral</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightcyan"></div> <code>lightcyan</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightgoldenrodyellow"></div> <code>lightgoldenrodyellow</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightgray"></div> <code>lightgray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightgreen"></div> <code>lightgreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightgrey"></div> <code>lightgrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightpink"></div> <code>lightpink</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightsalmon"></div> <code>lightsalmon</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightseagreen"></div> <code>lightseagreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightskyblue"></div> <code>lightskyblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightslategray"></div> <code>lightslategray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightslategrey"></div> <code>lightslategrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightsteelblue"></div> <code>lightsteelblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lightyellow"></div> <code>lightyellow</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: lime"></div> <code>lime</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: limegreen"></div> <code>limegreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: linen"></div> <code>linen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: magenta"></div> <code>magenta</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: maroon"></div> <code>maroon</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumaquamarine"></div> <code>mediumaquamarine</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumblue"></div> <code>mediumblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumorchid"></div> <code>mediumorchid</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumpurple"></div> <code>mediumpurple</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumseagreen"></div> <code>mediumseagreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumslateblue"></div> <code>mediumslateblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumspringgreen"></div> <code>mediumspringgreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumturquoise"></div> <code>mediumturquoise</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mediumvioletred"></div> <code>mediumvioletred</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: midnightblue"></div> <code>midnightblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mintcream"></div> <code>mintcream</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: mistyrose"></div> <code>mistyrose</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: moccasin"></div> <code>moccasin</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: navajowhite"></div> <code>navajowhite</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: navy"></div> <code>navy</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: oldlace"></div> <code>oldlace</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: olive"></div> <code>olive</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: olivedrab"></div> <code>olivedrab</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: orange"></div> <code>orange</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: orangered"></div> <code>orangered</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: orchid"></div> <code>orchid</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: palegoldenrod"></div> <code>palegoldenrod</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: palegreen"></div> <code>palegreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: paleturquoise"></div> <code>paleturquoise</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: palevioletred"></div> <code>palevioletred</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: papayawhip"></div> <code>papayawhip</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: peachpuff"></div> <code>peachpuff</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: peru"></div> <code>peru</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: pink"></div> <code>pink</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: plum"></div> <code>plum</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: powderblue"></div> <code>powderblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: purple"></div> <code>purple</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: red"></div> <code>red</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: rosybrown"></div> <code>rosybrown</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: royalblue"></div> <code>royalblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: saddlebrown"></div> <code>saddlebrown</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: salmon"></div> <code>salmon</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: sandybrown"></div> <code>sandybrown</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: seagreen"></div> <code>seagreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: seashell"></div> <code>seashell</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: sienna"></div> <code>sienna</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: silver"></div> <code>silver</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: skyblue"></div> <code>skyblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: slateblue"></div> <code>slateblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: slategray"></div> <code>slategray</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: slategrey"></div> <code>slategrey</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: snow"></div> <code>snow</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: springgreen"></div> <code>springgreen</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: steelblue"></div> <code>steelblue</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: tan"></div> <code>tan</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: teal"></div> <code>teal</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: thistle"></div> <code>thistle</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: tomato"></div> <code>tomato</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: turquoise"></div> <code>turquoise</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: violet"></div> <code>violet</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: wheat"></div> <code>wheat</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: white"></div> <code>white</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: whitesmoke"></div> <code>whitesmoke</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: yellow"></div> <code>yellow</code>
* <div style="display: inline-block; width: 1em; height: 1em; background: yellowgreen"></div> <code>yellowgreen</code>

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

Run `yarn install && yarn test` in order to run Jest tests.
