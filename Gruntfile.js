/*global module:false*/
module.exports = function (grunt) {

    'use strict';

    var SRC_CSS = 'content/static/css/';
    var SRC_JS = 'content/static/js/';
    var DIST = 'content/static/dist/';

    var MINIFIED_CSS = DIST + 'screen.min.css';
    var MINIFIED_PRINT_CSS = DIST + 'print.min.css';
    var MINIFIED_JS = DIST + 'all-js.min.js';

    var ASSET_MAP = DIST + 'assets.json';

    // Project configuration.
    grunt.initConfig({
        lint: {
            files: ['grunt.js', SRC_JS + '*.js', 'test/*.js']
        },
        qunit: {
            files: 'test/tests.html'
        },
        concat: {
            dist: {
                src: SRC_JS + '*.js',
                dest: DIST + 'all-js.js'
            }
        },
        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: MINIFIED_JS
            }
        },
        cssmin: {
            screen: {
                src: SRC_CSS + 'screen.css',
                dest: MINIFIED_CSS
            },
            print: {
                src: SRC_CSS + 'print.css',
                dest: MINIFIED_PRINT_CSS
            }
        },
        hash: {
            src: [MINIFIED_JS, MINIFIED_CSS, MINIFIED_PRINT_CSS],
            dest: DIST,
            mapping: ASSET_MAP
        },
        watch: {
            test: {
                files: ['test/**/*'],
                tasks: 'qunit'
            },
            js: {
                files: ['content/**/*.js'],
                tasks: 'lint dev-quick qunit'
            },
            build: {
                files: ['templates/**/*.html'],
                tasks: 'dev'
            },
            quick: {
                files: ['content/**/!(*.js)', 'sass/**/*.scss'],
                tasks: 'dev-quick'
            }
        },
        server: {
            base: 'dev-output/'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {}
        },
        uglify: {},
        compass: {
            dev: {
                bundleExec: true,
                config: 'config.rb'
            }
        },
        exec: {
            dev_clean: {
                command: 'rm -rf dev-output/* && rm -rf content/static/dist/*',
                stdout: true
            },
            prod_clean: {
                command: 'rm -rf output/* && rm -rf content/static/dist/*',
                stdout: true
            },
            dev_build: {
                command: 'python run.py dev'
            },
            prod_build: {
                command: 'python run.py prod'
            }
        }
    });

    // aliases for exec tasks
    grunt.registerTask('dev-clean', 'exec:dev_clean');
    grunt.registerTask('prod-clean', 'exec:prod_clean');
    grunt.registerTask('dev-build', 'exec:dev_build');
    grunt.registerTask('prod-build', 'exec:prod_build');

    // Prepare assets
    grunt.registerTask('assets', 'compass concat min cssmin');

    // Full clean dev build
    grunt.registerTask('dev', 'dev-clean assets dev-build');
    // Quick dev build; no clean, no JS lint/tests
    grunt.registerTask('dev-quick', 'assets dev-build');
    // Full clean prod build
    grunt.registerTask('prod', 'prod-clean assets hash prod-build');

    // Run server.
    grunt.registerTask('serve', 'dev server watch');

    // Default task
    grunt.registerTask('default', 'dev');

    // Plugin tasks.
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-hash');
};