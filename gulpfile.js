const gulp = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-ruby-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// var theme_name = 'example';

// Static Website --------------------
var project_dist = 'dist/';

// WordPress --------------------
// var project_dist = 'dist/wordpress/wp-content/themes/'+theme_name+'/';

// MovableType --------------------
// var project_dist = 'dist/mt/themes/'+theme_name+'/blog_static/';

// Drupal --------------------
// var project_dist = 'dist/themes/custom/'+theme_name+'/';

// a-blog cms --------------------
// var project_dist = 'dist/themes/'+theme_name+'/';



// sass
gulp.task('sass', () =>
  sass('_scss/*.scss', { style: 'expanded' })
    .on('error', sass.logError)
    .pipe(gulp.dest(project_dist + 'css/'))
);
gulp.task('sassmin', () =>
  sass('_scss/*.scss', { style: 'compressed' })
    .on('error', sass.logError)
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(project_dist + 'css/'))
);

// js
// gulp.task('js', function() {
//     gulp.src('_js/**/*.js')
//     .pipe(plumber())
//     .pipe(gulp.dest(project_dist + 'js/'));
// });
// gulp.task('jsmin', ['js'], function() {
//     gulp.src('_js/**/*.js')
//     .pipe(plumber())
//     .pipe(uglify())
//     .pipe(rename({extname: '.min.js'}))
//     .pipe(gulp.dest(project_dist + 'js/'));
// });

// watch
gulp.task('watch', function(){

  gulp.watch([
      '_scss/**/*.scss'
    ], function(event) {
    gulp.run('sass');
    gulp.run('sassmin');
  });

//  gulp.watch([
//      '_js/**/*.js'
//    ], function(event) {
//    gulp.run('js');
//  });

//  gulp.watch([
//      '_js/**/*.js'
//    ], function(event) {
//    gulp.run('jsmin');
//  });

});

gulp.task('default', function(){
  gulp.run('watch');
});
