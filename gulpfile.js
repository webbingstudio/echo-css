const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-ruby-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

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
gulp.task('sass', function() {
  return sass('_scss/*.scss', { style: 'expanded' })
    .on('error', sass.logError)
    .pipe(gulp.dest(dist_dir + 'css/'));
});
gulp.task('sassmin', ['sass'], function() {
  sass('_scss/*.scss', { style: 'compressed' })
    .on('error', sass.logError)
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dist_dir + 'css/'));
});

// js
gulp.task('js', function() {
    return gulp.src('_js/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest(dist_dir + 'js/'));
});
gulp.task('jsconcat', ['js'], function() {
    return gulp.src('_js/**/*.js')
    .pipe(plumber())
    .pipe(concat('echo.js'))
    .pipe(gulp.dest(dist_dir + 'js/'));
});
gulp.task('jsmin', ['jsconcat'], function() {
    return gulp.src('_js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(dist_dir + 'js/'));
});
gulp.task('jsminecho', function() {
    return gulp.src(dist_dir + 'js/echo.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(dist_dir + 'js/'));
});

// watch
gulp.task('watch', function(){

  gulp.watch([
      '_scss/**/*.scss'
    ], function(event) {
    gulp.run('sass');
    gulp.run('sassmin');
  });

gulp.watch([
    '_js/**/*.js'
  ], function(event) {
  gulp.run('js');
  gulp.run('jsconcat');
  gulp.run('jsmin');
});

gulp.watch([
    dist_dir + 'js/echo.js'
  ], function(event) {
  gulp.run('jsminecho');
});

});

gulp.task('default', function(){
  gulp.run('watch');
});
