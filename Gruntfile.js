(function() {
    module.exports = function(s) {
        s.initConfig({
            pkg: s.file.readJSON("package.json"),
            concat: {
                index: {
                    options: {
                        separator: ";"
                    },
                    src: [ "bower_components/", "bower_components/angular/angular.min.js", "bower_components/angular-route/angular-route.js", "bower_components/angular-sanitize/angular-sanitize.min.js", "bower_components/angular-scroll/angular-scroll.min.js", "bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js", "bower_components/contentful/dist/contentful.min.js", "bower_components/ng-contentful/ng-contentful.js", "bower_components/showdown/compressed/showdown.js", "bower_components/jquery-waypoints/waypoints.min.js", "js/lazy-yt.js", "js/app.js", "js/controllers.js", "js/directives.js", "js/services.js" ],
                    dest: "dist/js/app.concat.js"
                }
            },
            sass: {
                dist: {
                    files: [ {
                        src: "css/main.scss",
                        dest: "dist/css/main.css"
                    } ]
                }
            },
            uglify: {
                options: {
                    banner: "/* EDWEENA INDUSTRIES */\n",
                    preserveComments: false
                },
                index: {
                    src: "dist/js/app.concat.js",
                    dest: "dist/js/app.min.js"
                }
            },
            clean: {
                release: [ "dist/app.concat.js", "tmp/" ]
            },
            copy: {
                build: {
                    files: [ {
                        nonull: true,
                        expand: true,
                        src: [ "fonts/*", "img/*", "partials/*" ],
                        dest: "dist/"
                    } ]
                }
            },
            dentist: {
                build: {
                    options: {
                        include_js: "js/app.min.js",
                        include_css: "css/main.css"
                    },
                    src: "index.html",
                    dest_js: "dist/app.init.js",
                    dest_css: "tmp/null",
                    dest_html: "dist/index.html"
                }
            }
        });
        s.loadNpmTasks("grunt-contrib-concat");
        s.loadNpmTasks("grunt-contrib-sass");
        s.loadNpmTasks("grunt-contrib-uglify");
        s.loadNpmTasks("grunt-contrib-clean");
        s.loadNpmTasks("grunt-contrib-copy");
        s.loadNpmTasks("grunt-dentist");
        return s.registerTask("default", [ "concat", "sass", "uglify", "clean", "copy", "dentist" ]);
    };
}).call(this);