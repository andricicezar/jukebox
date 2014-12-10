
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: {
      production: ["dist", ".tmp"],
      cordova: ["cordova/www/.", "sj-cordova.apk"],
      crosswalk: ["crosswalk/assets/www/.", "sj-crosswalk.apk"]
    },

    copy: {
      production: {
        files: [
          {
            cwd: 'app/',
            expand: true,
            src: ['**', '!**/*.js'],
            dest: 'dist/'
          }
        ]
      },

      cordova: {
        files: [
          {
            cwd: 'dist/',
            expand: true,
            src: ['**'],
            dest: 'cordova/www/'
          }
        ]
      },

      crosswalk: {
        files: [
          {
            cwd: 'dist/',
            expand: true,
            src: ['**'],
            dest: 'crosswalk/assets/www/'
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
      },

      server: {
        options: {
          port: 8001,
          keepalive: true
        }
      }

    },

    shell: {
      compileCordova: {
        command: 'cordova compile android',
        options: {
          execOptions: {
            cwd: 'cordova/'
          }
        }
      },

      compileCrosswalk: {
        command: './cordova/build',
        options: {
          execOptions: {
            cwd: 'crosswalk/'
          }
        }
      },

      apkCordova: {
        command: 'cp cordova/platforms/android/ant-build/SocialJukebox-debug.apk sj-cordova.apk'
      },

      apkCrosswalk: {
        command: 'cp crosswalk/bin/SocialJukebox-debug.apk sj-crosswalk.apk'
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
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s)
  grunt.registerTask('default', [
    'connect:dev'
  ]);

  grunt.registerTask('production', [
    'clean:production', 'copy:production', 'useminPrepare', 'concat', 'uglify:my_target', 'cssmin:my_target', 'usemin'
  ]);

  grunt.registerTask('cordova', [
    'clean:cordova', 'copy:cordova', 'shell:compileCordova', 'shell:apkCordova'
  ]);

  grunt.registerTask('crosswalk', [
    'clean:crosswalk', 'copy:crosswalk', 'shell:compileCrosswalk', 'shell:apkCrosswalk'
  ]);

  grunt.registerTask('sheet', [
    'connect:server'
  ]);

  grunt.registerTask('compile', [
    'production', 'cordova', 'crosswalk'
  ]);
};
