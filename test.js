var canvasBuffer = require('./')
var test = require('tape')
var fs = require('fs')
var path = require('path')

test('in Electron, turns a Canvas into a Buffer', function (t) {
  var canvas = document.createElement('canvas')
  var context = canvas.getContext('2d')
  context.fillRect(0, 0, 50, 50)
  context.fillStyle = 'red'
  context.fillRect(50, 10, 30, 20)

  var buffer = canvasBuffer(canvas)
  t.equal(Buffer.isBuffer(buffer), true, 'is buffer')

  var exp = fs.readFileSync(path.join(__dirname, 'test-image.png'))
  t.deepEqual(buffer, exp, 'matches image')

  t.end()

  setTimeout(function () {
    window.close()
  }, 500)
})
