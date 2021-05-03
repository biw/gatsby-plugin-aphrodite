# gatsby-plugin-aphrodite

[![Build Status][build-badge]][build]
[![twitter][twitter-badge]][twitter]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

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

const SomeComponent = () => (
  <div className={css(styles.message)}>Hello World</div>
)

export default SomeComponent
```

## LICENSE

MIT © [Ben Williams](https://719ben.com)

[build-badge]: https://img.shields.io/circleci/build/github/biw/gatsby-plugin-aphrodite.svg?style=flat-square
[build]: https://travis-ci.org/biw/gatsby-plugin-aphrodite
[version-badge]: https://img.shields.io/npm/v/gatsby-plugin-aphrodite.svg?style=flat-square
[package]: https://www.npmjs.com/package/gatsby-plugin-aphrodite
[license-badge]: https://img.shields.io/npm/l/gatsby-plugin-aphrodite.svg?style=flat-square
[license]: https://github.com/biw/gatsby-plugin-aphrodite/blob/master/LICENSE
[twitter-badge]: https://img.shields.io/twitter/follow/biwills.svg?style=flat-square&logo=twitter&label=Follow
[twitter]: https://twitter.com/biwills
