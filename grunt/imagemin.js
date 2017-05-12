// Require lossy compressors

var pngquant       = require('imagemin-pngquant');
var jpegrecompress = require('imagemin-jpeg-recompress');

// Compress images
module.exports = {
  dynamic: {
    options: {
      optimizationLevel: 3,
      svgoPlugins: [{ removeViewBox: false }],
    },
    
    files: [{
      expand: true,
      cwd: '<%= paths.src_img %>',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= paths.dist_img %>'
    }]
  },
  lossy: {
    options: {
      optimizationLevel: 3,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant(), jpegrecompress()]
    },
    
    files: [{
      expand: true,
      cwd: '<%= paths.src_img %>',
      src: ['**/*.{png,jpg,gif}'],
      dest: '<%= paths.dist_img %>'
    }]
  }
};
