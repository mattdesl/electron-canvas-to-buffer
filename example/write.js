var canvasBuffer = require('../')

// your canvas drawing
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')
context.fillRect(0, 0, 50, 50)
context.fillStyle = 'red'
context.fillRect(50, 10, 30, 20)

// turn canvas into Buffer
var buffer = canvasBuffer(canvas, 'image/png')

// write canvas to process.stdout
var ret = process.stdout.write(buffer)
if (ret) {
  done()
} else {
  // still buffering
  process.on('drain', done)
}

// close browser
function done () {
  window.close()
}
