var nativeImage = require('electron').nativeImage
var types = ['image/png', 'image/jpg', 'image/jpeg']

module.exports = function canvasBuffer (canvas, type, quality) {
  type = type || 'image/png'
  quality = typeof quality === 'number' ? quality : 0.9
  if (types.indexOf(type) === -1) {
    throw new Error('unsupported image type ' + type)
  }

  var data = canvas.toDataURL(type, quality)
  var img = typeof nativeImage.createFromDataURL === 'function'
    ? nativeImage.createFromDataURL(data) // electron v0.36+
    : nativeImage.createFromDataUrl(data) // electron v0.30
  if (/^image\/jpe?g$/.test(type)) {
    return img.toJpeg(Math.floor(quality * 100))
  } else {
    return img.toPng()
  }
}
