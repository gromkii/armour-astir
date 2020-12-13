/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    include = require('gulp-include'),
    jshint = require('gulp-jshint'),

    jsGlob = [
        '*.js',
        'gulpfile.js',
        'src/**/*.js'
    ];

gulp.task('build', function(){
    console.log('Building Sheet');

    gulp.src('src/template/*.html')
        .pipe(include())
            .on('error',console.log)
        .pipe(gulp.dest('./'));
});

// create a default task and just log a message
gulp.task('default', ['build']);

// gutil.log('Gulp is running!')

gulp.task('jshint', function() {
    return gulp.src( jsGlob )
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch( jsGlob , ['default']);
});