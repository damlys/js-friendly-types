Friendly Types
===

This ultra-simple library contains just three functions
which simplifies primitive types conversion.

## Installation

```
$ npm install --save friendly-types
```

## Usage

```javascript
const { toBoolean, toNumber, toString } = require("friendly-types");
// import { toBoolean, toNumber, toString } from "friendly-types";

toBoolean(undefined);   // false
toBoolean(null);        // false
toBoolean(0);           // false
toBoolean(1);           // true
toBoolean("");          // false
toBoolean(" ");         // true
toBoolean("False");     // false ("0", "false", "off" and "no" strings are converted to false)
toBoolean("True");      // true
toBoolean("whatever");  // true

toNumber(undefined);    // 0
toNumber(null);         // 0
toNumber(false);        // 0
toNumber(true);         // 1
toNumber("-123.45");    // -123.45
toNumber("it's 5");     // error!

toString(undefined);    // ""
toString(null);         // ""
toString(false);        // "false"
toString(true);         // "true"
toString(0);            // "0"
toString(-123.45);      // "-123.45"
```

Need more examples? See
[tests](https://github.com/damlys/js-friendly-types/blob/master/tests/converters.test.ts#L3).
