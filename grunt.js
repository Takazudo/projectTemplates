/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){

  grunt.initConfig({
    watch: {
      coffee: {
        files: [
          'src/coffee/*.coffee'
        ],
        tasks: 'coffee notifyOK'
      },
      sass: {
        files: [
          'src/scss/*.scss'
        ],
        tasks: 'sass notifyOK'
      }
    },
    coffee: {
      'src/jekyll/js/1.js': [ 'src/coffee/1.coffee' ],
      'src/jekyll/js/2.js': [ 'src/coffee/2.coffee' ]
    },
    sass: {
      'src/jekyll/css/1.css': 'src/scss/1.scss'
    }
  });

  grunt.loadTasks('src/gruntTasks');
  grunt.registerTask('default', 'coffee sass notifyOK');

};
