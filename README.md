# electron-canvas-to-buffer

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

With Electron, turns a Canvas element into a Node Buffer.

This module uses Electron built-ins (native-image), so it is only useful within that environment.

## Example

```js
var canvasBuffer = require('electron-canvas-to-buffer')
var fs = require('fs')

// your canvas drawing
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')
context.fillRect(0, 0, 50, 50)
context.fillStyle = 'red'
context.fillRect(50, 10, 30, 20)

// as a buffer
var buffer = canvasBuffer(canvas, 'image/png')

// write canvas to file
fs.writeFile('image.png', buffer, function (err) {
  throw err
})
```

You can run the above source through an Electron app with `node-integration` enabled. It should also work with [chromeo](https://github.com/mattdesl/chromeo) (still experimental):

```sh
chromeo index.js
```

## Install

```sh
npm install electron-canvas-to-buffer --save
```

## Usage

[![NPM](https://nodei.co/npm/electron-canvas-to-buffer.png)](https://www.npmjs.com/package/electron-canvas-to-buffer)

#### `buf = canvasBuffer(canvas, [type], [quality])`

Returns a Buffer representing the specified `canvas` element. Parameters:

- `type` (String) either `"image/png"` (default) or `"image/jpeg"`
- `quality` (Number) for JPG, decides the encoding quality (default 0.9)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/electron-canvas-to-buffer/blob/master/LICENSE.md) for details.
