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
var minify = require('gulp-minify')
var plumber = require('gulp-plumber')

/** Optimisation **/
var imagemin = require('gulp-imagemin')
var critical = require('critical').stream

var input = {
  styles: 'src/sass/**/*.scss',
  javascript: 'src/javascript/**/*.js',
  images: 'src/images/*',
  html: 'src/*.html'
}
var output = {
  styles: 'dist/styles/',
  javascript: 'dist/javascript',
  images: 'dist/images',
  html: 'dist'
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
    .pipe(minify())
    .pipe(gulp.dest(output.javascript))
})

gulp.task('images', function () {
  return gulp.src(input.images)
    .pipe(imagemin())
    .pipe(gulp.dest(output.images))
    .pipe(browserSync.stream())
})

gulp.task('critical', function () {
  return gulp.src(input.html)
    .pipe(critical({base: 'dist/', inline: true, css: ['dist/styles/styles.css']}))
    .pipe(gulp.dest(output.html))
})

gulp.task('html', function () {
  return gulp.src(input.html)
    .pipe(gulp.dest(output.html))
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
  del(['!/dist/*.txt', '/dist/'])
})

gulp.task('deploy', function () {
  runSequence('cleanup',
    ['html', 'images', 'javascript:prod', 'styles:prod', 'critical']
  )
})

gulp.task('develop', function () {
  runSequence(['images', 'javascript', 'styles', 'html'])
  gulp.start('browser-sync')
  gulp.watch(input.html, ['html'])
  gulp.watch(input.images, ['images'])
  gulp.watch(input.javascript, ['javascript:prod'])
  gulp.watch(input.styles, ['styles'])
  gulp.watch('dist/*.html').on('change', browserSync.reload)
})
