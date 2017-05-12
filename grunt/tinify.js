// lossy png and jpg optimization/compression using tinypng.com / tinyjpeg.com

module.exports = {
	tinify: {
    options: {
        key: '<%= secrets.tinify.key %>',
    },
    files: {
      src: '<%= paths.src_img %>/*.{png,jpg}',
      dest: '<%= paths.dist_img %>'
    },
  }
};