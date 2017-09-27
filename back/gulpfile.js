'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const gulpsync = require('gulp-sync')(gulp);
const execSync = require('child_process').execSync;

let rmFolder = (dirName) => {
  execSync('rm -rf ' + dirName, (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
};

gulp.task('delete-dist', () => {
  rmFolder('dist');
});

gulp.task('lint', () => {
  return gulp.src(
      [
        'server/**/*.js',
        'gulpfile.js'
      ]
    )
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
  return gulp.src('server/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-dist-files', () => {
  return gulp.src(
    [
      'Procfile',
      'package.json'
    ], {
      base: '.'
    }
  ).pipe(gulp.dest('dist'));
});


gulp.task('compile', gulpsync.sync(
  ['delete-dist',
    'lint',
    'babel',
    'copy-dist-files'
  ]));

gulp.task('dev', () => {
  return nodemon({
    script: 'dist/server.js',
    watch: ['server', 'public'],
    ext: 'js json',
    tasks: ['lint', 'delete-dist', 'babel']
  });
});
