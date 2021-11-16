var postcss = require('gulp-postcss');
var gulp = require('gulp');

var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');

gulp.task('css', function () {
    var plugins = [
        will_change(),
		autoprefixer(),
		color_rgba_fallback(),
		opacity(),
		pseudoelements(),
		vmin(),
		pixrem()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});