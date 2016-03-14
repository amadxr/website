'use strict';
 
module.exports = function(grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-responsive-images');
 
    grunt.initConfig({
        app: {
            app: '.',
            dist: 'dist',
            baseurl: ''
        },
        watch: {
            jekyll: {
                files: [
                    '<%= app.app %>/**/*.{html,yml,md,mkd,markdown}'
                ],
                tasks: ['jekyll:server']
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            dist: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '<%= app.dist %>',
                        '.tmp'
                    ]
                }
            }
        },
        clean: {
            server: [
                '.jekyll',
                '.tmp'
            ],
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= app.dist %>/*',
                        '!<%= app.dist %>/.git*'
                    ]
                }]
            }
        },
        jekyll: {

            options: {
                config: '_config.yml,_config.build.yml',
                src: '<%= app.app %>'
            },
            dist: {
                options: {
                    dest: '<%= app.dist %>/<%= app.baseurl %>',
                }
            },
            server : {
                options : {
                    serve : true,
                    port : 9000,
                    auto : true
                }
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
 
    // Define Tasks
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
 
        grunt.task.run([
            'clean:server',
            'jekyll:server',
            'autoprefixer'
        ]);
    });
 
    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('process_images', [
        'responsive_images',
        'svgmin',
        'imagemin'
    ]);
 
    grunt.registerTask('build', [
        'clean:dist',
        'jekyll:dist',
//        'imagemin',
        'svgmin',
        'autoprefixer',
        'htmlmin'
    ]);
 
    grunt.registerTask('deploy', [
        'build',
        'copy'
    ]);
 
    grunt.registerTask('default', [
        'serve'
    ]);
};
