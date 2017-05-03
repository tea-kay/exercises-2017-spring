// this is a javascript line comment, everything after two slashes is not doing anything
// line comments end with end of the line, so the next line is not commented out and is executed

// load gulp
var gulp = require('gulp');
// load Browsersync
var browserSync = require('browser-sync').create();

// define a task
gulp.task(
    // name of the task
    'default', // task named default is ran by default
    // the second parameter is a function that contains everything that the task will do
    function() {
        browserSync.init({ // initalize Browsersync
            // set what files be served
            server: {
                baseDir: './' // serve from folder that this file is located
            },
            files: ['*.css', '*.html'] // watch for changes all files named anything.css and anything.html in the same folder gulpfile.js is located
        });
    }
);