'use strict';
const gulp = require('gulp');
const inject = require('gulp-inject');
const argv = require('yargs').argv;
const readConfig = require('read-config');
const config = argv.prod ? readConfig('_config.build.yml') : readConfig('_config.yml');

// 'gulp inject:head' -- injects our style.css file into the head of our HTML
gulp.task('inject:head', () =>
  gulp.src('.tmp/src/_includes/head.html')
    .pipe(inject(gulp.src('.tmp/assets/stylesheets/*.css'), {ignorePath: '.tmp', addPrefix: config.baseurl}))
    .pipe(gulp.dest('.tmp/src/_includes'))
);

// 'gulp inject:footer' -- injects our index.js file into the end of our HTML
gulp.task('inject:footer', () =>
  gulp.src('.tmp/src/_layouts/default.html')
    .pipe(inject(gulp.src('.tmp/assets/javascript/*.js'), {ignorePath: '.tmp', addPrefix: config.baseurl}))
    .pipe(gulp.dest('.tmp/src/_layouts'))
);
