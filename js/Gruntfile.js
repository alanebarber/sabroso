'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    browserify:     {
      options:      {
        transform:  [ require('grunt-react').browserify ]
      },
      app:          {
        src:        'app/main.js',
        dest:       'build/main.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

  // Task(s).
  grunt.registerTask('build', ['browserify']);

};
