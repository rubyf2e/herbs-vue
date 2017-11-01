var proxy       = 'localhost/~ruby/herbs-vue/';
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
	browserSync.init([
		'./dist/css/**/*.css',
		'./dist/css/*.css',
		'./dist/js/**/*.js',
		'./dist/js/*.js',
		'./*.php',
		'./*.html',
		], {
			proxy: proxy
		});
});