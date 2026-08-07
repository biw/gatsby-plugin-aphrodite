# gatsby-plugin-aphrodite

[![CI](https://badgen.net/github/checks/biw/gatsby-plugin-aphrodite)](https://github.com/biw/gatsby-plugin-aphrodite/actions)
[![npm version](https://badgen.net/npm/v/gatsby-plugin-aphrodite)](https://www.npmjs.com/package/gatsby-plugin-aphrodite)
[![npm downloads](https://badgen.net/npm/dt/gatsby-plugin-aphrodite)](https://www.npmjs.com/package/gatsby-plugin-aphrodite)

Provides drop-in support for [Aphrodite](https://github.com/Khan/aphrodite) in [Gatsby](https://github.com/gatsbyjs/gatsby).

## Install

```sh
yarn add aphrodite gatsby-plugin-aphrodite
```

or

```sh
npm install --save aphrodite gatsby-plugin-aphrodite
```

## How to use

Add the plugin to the plugins array in your `gatsby-config.js`:

```js
//gatsby-config.js

plugins: ['gatsby-plugin-aphrodite']
```

then use `aphrodite` in your component files:

```js
// SomeComponent.js

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({ message: { color: 'red' } })

const SomeComponent = () => <div className={css(styles.message)}>Hello World</div>

export default SomeComponent
```

## LICENSE

MIT © [Ben Williams](https://github.com/biw)
