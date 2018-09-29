const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-ruby-sass');
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
gulp.task('sass', () =>
  sass('_scss/*.scss', { style: 'expanded' })
    .on('error', sass.logError)
    .pipe(gulp.dest(dist_dir + 'css/'))
);
gulp.task('sassmin', () =>
  sass('_scss/*.scss', { style: 'compressed' })
    .on('error', sass.logError)
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dist_dir + 'css/'))
);

// js
gulp.task('js', function() {
    gulp.src('_js/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest(dist_dir + 'js/'));
});
gulp.task('jsmin', ['js'], function() {
    gulp.src('_js/**/*.js')
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
});

gulp.watch([
    '_js/**/*.js'
  ], function(event) {
  gulp.run('jsmin');
});

});

gulp.task('default', function(){
  gulp.run('watch');
});
