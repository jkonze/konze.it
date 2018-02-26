'use strict'

var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sourcemaps = require('gulp-sourcemaps')
var del = require('del')
var runSequence = require('run-sequence')

/** Styling **/
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var tildeImporter = require('node-sass-tilde-importer')
var cleanCSS = require('gulp-clean-css')

/** Javascript **/
var standard = require('gulp-standard')
var uglify = require('gulp-uglify')
var plumber = require('gulp-plumber')

/** Optimisation **/
var imagemin = require('gulp-imagemin')

var input = {
  styles: 'src/sass/**/*.scss',
  javascript: 'src/javascript/*.js',
  images: 'src/images/*'
}
var output = {
  styles: 'dist/styles/',
  javascript: 'dist/javascript',
  images: 'dist/images/'
}

gulp.task('styles', function () {
  return gulp.src(input.styles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildeImporter}))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.styles))
    .pipe(plumber.stop())
    .pipe(browserSync.stream())
})

gulp.task('styles:prod', function () {
  return gulp.src(input.styles)
    .pipe(sass({importer: tildeImporter}))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(output.styles))
})

gulp.task('javascript', function () {
  return gulp.src(input.javascript)
    .pipe(plumber())
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(output.javascript))
})

gulp.task('javascript:prod', function () {
  return gulp.src(input.javascript)
    .pipe(uglify())
    .pipe(gulp.dest(output.javascript))
})

gulp.task('images', function () {
  return gulp.src(input.images)
    .pipe(imagemin())
    .pipe(gulp.dest(output.images))
    .pipe(browserSync.stream())
})

gulp.task('browser-sync', function () {
  return browserSync.init({
    server: {
      baseDir: './dist'
    },
    index: 'index.html'
  })
})

gulp.task('cleanup', function () {
  del(['!/dist/index.html', '/dist/'])
})

gulp.task('deploy', function () {
  runSequence('cleanup',
    ['images', 'javascript:prod', 'styles:prod']
  )
})

gulp.task('develop', function () {
  gulp.start('browser-sync')
  gulp.watch(input.images, ['images'])
  gulp.watch(input.javascript, ['javascript'])
  gulp.watch(input.styles, ['styles'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
})
