var gulp = require('gulp'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    connect = require('gulp-connect'),
    sequence = require('gulp-sequence');

var plugins = [
      autoprefixer({browsers: ["> 1%","last 2 versions","iOS >= 6",
"Android >= 4"]})
      //cssnano()
    ];
gulp.task('less', function() {
  gulp.src('theme/*.less')
    .pipe(less())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/theme/'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./*.html')
    //.pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src('js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('theme/*.less', ['less']);
  gulp.watch('./*.html', ['html']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('server', function() {
  connect.server({
    root: './',
    port: 8000,
    livereload: true
  });
});


gulp.task('dev', sequence(['js', 'less'],'watch', 'server'));