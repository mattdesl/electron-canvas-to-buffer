var nativeImage = require('native-image')
var types = ['image/png', 'image/jpg', 'image/jpeg']

module.exports = function canvasBuffer (canvas, type, quality) {
  type = type || 'image/png'
  if (types.indexOf(type) === -1) {
    throw new Error('unsupported image type ' + type)
  }

  var data = canvas.toDataURL(type, quality)
  var img = nativeImage.createFromDataUrl(data)
  if (/^image\/jpe?g$/.test(type)) {
    return img.toJpeg(quality)
  } else {
    return img.toPng()
  }
}
