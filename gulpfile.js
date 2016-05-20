var jshint = require('gulp-jshint');
var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var stylus = require("gulp-stylus");



gulp.task("style", function(){
	return gulp.src('./main.styl')
		.pipe(stylus())
		.pipe(gulp.dest("./style"));
});

gulp.task('jshint', function(){
	return gulp.src('*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch(["*.html", "*.js", "*.styl"], ["jshint", 'style'])
	.on("change", browserSync.reload);
});


// https://www.youtube.com/c/leveluptuts