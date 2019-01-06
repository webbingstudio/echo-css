'use strict';

const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

// var theme_name = 'echo';

// Static Website --------------------
var dist_dir = 'dist/';

// WordPress --------------------
// var dist_dir = 'dist/wordpress/wp-content/themes/'+theme_name+'/';

// MovableType --------------------
// var dist_dir = 'dist/mt/themes/'+theme_name+'/blog_static/';

// Drupal --------------------
// var dist_dir = 'dist/themes/custom/'+theme_name+'/';

// a-blog cms --------------------
// var dist_dir = 'dist/themes/'+theme_name+'/';



// sass
gulp.task('sass', function () {
  return gulp.src('_scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(dist_dir + 'css/'));
});
gulp.task('sassmin', function () {
  return gulp.src('_scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dist_dir + 'css/'));
});


// js_plugins
gulp.task('js_plugins', function() {
    return gulp.src('_plugins/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest(dist_dir + 'plugins/'));
});
gulp.task('jsmin_plugins', function() {
    gulp.src('_plugins/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(dist_dir + 'plugins/'));
});


// js task here -----------------


// watch
gulp.task('watch', function(){

  gulp.watch([
      '_scss/**/*.scss'
    ], function(event) {
    gulp.run('sass');
    gulp.run('sassmin');
  });

gulp.watch([
    '_plugins/**/*.js'
  ], function(event) {
  gulp.run('js_plugins');
  gulp.run('jsmin_plugins');
});


// js watch here -----------------


});

gulp.task('default', function(){
  gulp.run('watch');
});
