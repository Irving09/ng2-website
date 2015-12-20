'use strict';

const gulp          = require('gulp');
const del           = require('del');
const typescript    = require('typescript');
const compile       = require('gulp-typescript');
const srcmaps       = require('gulp-sourcemaps');
const inject        = require('gulp-inject');
const lint          = require('gulp-tslint');

const config        = require('./gulp.config')();
const PROJECT       = compile.createProject('./tsconfig.json', { typescript: typescript });

gulp.task('default', ['transpile']);

gulp.task('clean', (done) => {
    del([config.bin]).then(paths => {
        console.log('transpiled *.js files inside app successfully deleted:\n\t', paths.join('\n'));
        done();
    });
});

gulp.task('lint', () => {
    return gulp
        .src(config.ts)
        .pipe(lint())
        .pipe(lint.report('full'));
});

gulp.task('transpile', () => {
    return gulp
        .src([config.ts, config.typings])
        .pipe(srcmaps.init())
        .pipe(compile(PROJECT)).js
        .pipe(srcmaps.write('.'))
        .pipe(gulp.dest(config.out));
});

gulp.task('serve', ['lint', 'transpile'], () => {
    gulp.watch(['./app/**/*.{ts,html,css}'], ['transpile', 'lint']);
});