# eslint-plugin-id-denylist-regexp

Drop-in replacement for [ESLint's rule `id-denylist`](https://eslint.org/docs/latest/rules/id-denylist) with support for regular expressions.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm install eslint --save-dev
```

Next, install `eslint-plugin-id-denylist-regexp`:

```sh
npm install @susiandjames/eslint-plugin-id-denylist-regexp --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-id-denylist-regexp` globally.

## Usage

Extend your `eslint.config.js` by the rule `susiandjames/id-denylist` as follows:

```js
import susiandjames from "@susiandjames/eslint-plugin-id-denylist-regexp";

export default [
  {
    plugins: {
      susiandjames,
    },
    rules: {
      "susiandjames/id-denylist": [
        "warn",
        "/[0-9]+$/", // Disallow identifiers ending with numbers, e.g., `tmp0`
        "/(black|white)list/i", // Disallow identifiers containing the words "blacklist" and "whitelist" independent of their case sensitivity 
      ],
    },
  },
];
```

**Note:** Since ESLint's options need to serializable you have to indicate regular expressions by a leading slash.
