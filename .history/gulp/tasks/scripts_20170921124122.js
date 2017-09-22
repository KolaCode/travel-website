var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function() {
    weboack(require('../../webpack.config.js'), function() {
        console.log("Hooray, webpack completed!");
    });
});