
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: ["dist", ".tmp"],

    copy: {
      main: {
        files: [
          {
            cwd: 'app/',
            expand: true,
            src: ['**', '!**/*.js'],
            dest: 'dist/'
          }
        ]
      }
    },

    uglify: {
      options: {
        report: 'min',
        mangle: false,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'dist/sj.min.js': ['.tmp/concat/sj.min.js']
        }
      }
    },
    
    cssmin: {
      my_target: {
        files: {
          'dist/sj.min.css': ['.tmp/concat/sj.min.css']
        }
      }
    },

    useminPrepare: {
      html: 'app/index.html'
    },

    usemin: {
      html: 'dist/index.html'
    },

    connect: {
      dev: {
        options: {
          port: 8000,
          base: 'app',
          keepalive: true
        }
      },

      production: {
        options: {
          port: 8000,
          base: 'dist',
          keepalive: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');

  // Default task(s)
  grunt.registerTask('default', [
    'connect:dev'
  ]);
  grunt.registerTask('production', [
    'clean', 'copy', 'useminPrepare', 'concat', 'uglify:my_target', 'cssmin:my_target', 'usemin', 'connect:production'
  ]);

};
