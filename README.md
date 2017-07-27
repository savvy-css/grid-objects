# Savvy CSS Grid Object Patterns

[![Latest NPM release][npm-badge]][npm-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![License][license-badge]][license-badge-url]

_Grid object patterns for Savvy CSS._

## Installation

You can install this package using [yarn](https://yarnpkg.com/en/docs/install):

```shell
yarn add --dev @savvy-css/grid-object-patterns
```

... or using [NPM](https://docs.npmjs.com/getting-started/installing-node):

```shell
npm install --save-dev @savvy-css/grid-object-patterns
```

## Usage

Within a project that's capable of importing CSS, simply import
the module by its package name within your own CSS:

```css
@import "@savvy-css/grid-objects";
```

Importing this module will add [its properties](/lib/grid-objects.css) to your project. To override them, simply define them in any portion of your CSS that's imported/processed later.

🔑 For practical tips, [check out Savvy's guide on using the grid](https://github.com/savvy-css/savvy/blob/master/doc/guides/using-the-grid.md).

[npm-badge]: https://img.shields.io/npm/v/@savvy-css/grid-object-patterns.svg
[npm-badge-url]: https://www.npmjs.com/package/@savvy-css/grid-object-patterns
[license-badge]: https://img.shields.io/npm/l/@savvy-css/grid-object-patterns.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/@savvy-css/grid-object-patterns.svg
[dependencies-badge-url]: https://david-dm.org/@savvy-css/grid-object-patterns
[devDependencies-badge]: https://img.shields.io/david/dev/@savvy-css/grid-object-patterns.svg
[devDependencies-badge-url]: https://david-dm.org/@savvy-css/grid-object-patterns#info=devDependencies

