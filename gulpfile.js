'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-Sync');

    gulp.task('sass', function () {
    	return gulp.src('./css/*.sass')
    	.pipe(sass().on('error',sass.logError))
    	.pipe(gulp.dest('./css'));
    });

    gulp.task('sass:watch',function(){
    	gulp.watch('./css/*.scss',['sass']);
    });

    gulp.task('browserSync',function(){
    	var files = [
            './*.html',
            './css/*.css',
            './js/*.js',
            './img/*.{png,gif,jpg}'
    	];

    	browserSync.init(files,{
          server:{
          	baseDir:'./'
          }
    	});
    });

    gulp.task('default',['browserSync'],function(){
    	gulp.start('sass:watch');
    });