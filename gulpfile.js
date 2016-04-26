/**
 * Created by JLou on 4/14/2016.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var nodemon = require('gulp-nodemon');
var install = require('gulp-install');
var uglify = require('gulp-uglify');
var server = require('gulp-develop-server');

gulp.task('webpack', function () {
    return gulp.src('index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('public/build'));
});

gulp.task('clean', ['webpack'], function () {
    return gulp.src('public/build/bundle.js')
        .pipe(uglify())
        .pipe(stripDebug())
        .pipe(gulp.dest('public/build'));

});

/**
 * start in development mode
 */
gulp.task('start-dev', ['webpack'], function () {
    nodemon({
        script: 'server.js',
        env: {'NODE_ENV': 'development'}
    })
});

/**
 * start in production mode
 */
gulp.task('start-pro', ['clean'], function () {
    server.listen({path: './server.js', env: {NODE_ENV: 'production'}});
});

gulp.task('install', function () {
    gulp.src(['package.json'])
        .pipe(install());
});
