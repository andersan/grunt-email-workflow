// Replace compiled template images sources from ../src/html to ../dist/html
module.exports = {
  src_images: {
    options: {
      usePrefix: false,
      patterns: [
        {
          match: /(<img[^>]+[\"'])(\.\.\/src\/img\/)/gi,  // Matches <img * src="../src/img or <img * src='../src/img'
          replacement: '$1../<%= paths.dist_img %>/'
        },
        {
          match: /(url\(*[^)])(\.\.\/src\/img\/)/gi,  // Matches url('../src/img') or url(../src/img) and even url("../src/img")
          replacement: '$1../<%= paths.dist_img %>/'
        }
      ]
    },

    files: [{
      expand: true,
      flatten: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: '<%= paths.dist %>'
    }]
  },
  s3_images: {
    options: {
      usePrefix: false,
      patterns: [
        {
          match: /(<img[^>]+[\"'])(\.\.\/(src|dist)\/img\/)/gi,  // Matches <img * src="../src/img or <img * src='../src/img' ** also want to match ../dist/img and '../dist/img'
          replacement: '$1..<%= secrets.s3.bucketuri %>/<%= secrets.s3.bucketname %>/<%= secrets.s3.bucketdir %>/<%= paths.dist_img %>'
        },
        {
          match: /(url\(*[^)])(\.\.\/(src|dist)\/img\/)/gi,  // Matches url('../src/img') or url(../src/img) and even url("../src/img")
          replacement: '$1../<%= paths.dist_img %>/'
        }
      ]
    },

    files: [{
      expand: true,
      flatten: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: '<%= paths.dist_img %>'
    }]
  }
};
