module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          "www/assets/css/styles.css": "www/assets/less/styles.less"
        }
      }
    },
    watch: {
      less: {
        files: 'www/assets/less/**/*.less',
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};