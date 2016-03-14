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
//        cdnify: {
//            options: {
//              rewriter: function (url) {
//                if (url.indexOf('data:') === 0) {
//                  return url;            // leave data URIs untouched 
//                } else {
//                  return url + '?12345'; // add query string to all other URLs 
//                }
//              }
//            },
//            files: [{
//              expand: true,
//              cwd: '<%= app.dist %>/<%= app.baseurl %>',
//              src: '**/*.{svg,png,jpeg,jpg,gif}',
//              dest: '<%= app.dist %>/<%= app.baseurl %>'
//            }]
//        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: '**/*.html',
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= app.baseurl %>/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= app.baseurl %>/css'
                }]
            }
        },
//        cssmin: {
//            dist: {
//                options: {
//                    keepSpecialComments: 0,
//                    check: 'gzip'
//                },
//                files: [{
//                    expand: true,
//                    cwd: '.tmp/<%= app.baseurl %>/css',
//                    src: ['*.css'],
//                    dest: '.tmp/<%= app.baseurl %>/css'
//                }]
//            }
//        },
        imagemin: {
            options: {
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/images',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/images',
                    src: '**/*.svg',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/images'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.tmp/<%= app.baseurl %>',
                    src: [
                        'css/**/*',
                        'js/**/*'
                    ],
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },

        responsive_images: {
            task: {
              options: {
                engine: 'im',
                sizes: [{
                  width: 320,
                  height: 240
                },{
                  name: 'large',
                  width: 640
                },{
                  name: "large",
                  width: 1024,
                  suffix: "_x2",
                  quality: 60
                }]
              },
              files: [{
                expand: true,
                src: ['images/originals/**.{jpg,gif,png}'],
                custom_dest: 'images/'
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
