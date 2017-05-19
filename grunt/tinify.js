// lossy png and jpg optimization/compression using tinypng.com / tinyjpeg.com

module.exports = {
	tinify: {
    options: {
        key: '<%= secrets.tinify.api_key %>'
    },
    files: {
      src: ['<%= paths.src_img %>/*.png', '<%= paths.src_img %>/*.jpg'],
      dest: '<%= paths.dist_img %>'
    },
  },
};