var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('default', () => {
    gulp.src('./content/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./content'));
});