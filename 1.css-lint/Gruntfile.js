module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Grunt Tasks
  grunt.initConfig({
    //CSS Lint
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      all: {
        options: {
          import: false
        },
        src: ['./css/*.css']
      }
    },
    // Watch
    watch: {
      dist: {
        files: ['./css/*.css'],
        tasks: ['csslint']
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['csslint', 'watch']);
  grunt.registerTask('test',    ['csslint']);
};
