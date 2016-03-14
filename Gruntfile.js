'use strict';
 
module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-cwebp');
 
    grunt.initConfig({


        cwebp: {
          dynamic: {
            options: {
              q: 50
            },
            files: [{
              expand: true,
              cwd: 'images/', 
              src: ['**/*.{png,jpg,jpeg}'],
              dest: 'images/'
            }]
          }
        },

        imagemin: {
            options: {
                progressive: true
            },
            task: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: 'images/'
                }]
            }
        },
        svgmin: {
            task: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '**/*.svg',
                    dest: 'images/'
                }]
            }
        },
        responsive_images: {
            task: {
              options: {
                engine: 'im',
                sizes: [{
                  name: 'full',
                  width: 1400,
                  height: 1400,
                  quality: 65
                },{
                  name: 'large',
                  width: 1200,
                  height: 1200,
                  quality: 65
                },{
                  name: 'medium',
                  width: 768,
                  height: 768,
                  quality: 65
                },{
                  name: 'small',
                  width: 480,
                  height: 480,
                  quality: 65
                }]
              },
              files: [{
                expand: true,
                src: 'images/originals/*.{jpg,jpeg,png,gif}',
                custom_dest: './images/{%= name %}'
              }]
            }
        }
    });

    grunt.registerTask('process_images', [
        'responsive_images',
        'svgmin',
        'cwebp',
        'imagemin'
    ]);
 
};
