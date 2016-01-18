'use strict';

const gulp          = require('gulp');
const del           = require('del');
const typescript    = require('typescript');
const compile       = require('gulp-typescript');
const srcmaps       = require('gulp-sourcemaps');
const lint          = require('gulp-tslint');
const path          = require('path');
const exec          = require('child_process').exec;

const config        = require('./gulp.config')();
const PROJECT       = compile.createProject('./tsconfig.json', { typescript: typescript });

gulp.task('default', ['lint', 'transpile', 'copy']);

gulp.task('clean', (done) => {
    del([config.out]).then(paths => {
        console.log('dist directory successfully deleted:\n\t', paths.join('\n'));
        done();
    });
});

gulp.task('lint', () => {
    return gulp
        .src(config.ts)
        .pipe(lint())
        .pipe(lint.report('full'));
});

gulp.task('copy.assets', () => {
    return gulp
        .src([config.assets, config.index], {
            'base' : '.'
        })
        .pipe(gulp.dest(config.out));
});

gulp.task('copy.dependencies', () => {
    return gulp
        .src(config.deps, {
            'base' : './node_modules'
        })
        .pipe(gulp.dest(path.join(config.out, 'libs')));
});

gulp.task('copy', ['copy.assets', 'copy.dependencies']);

gulp.task('transpile', () => {
    return gulp
        .src([config.ts, config.typings])
        .pipe(srcmaps.init())
        .pipe(compile(PROJECT)).js
        .pipe(srcmaps.write('.'))
        .pipe(gulp.dest(path.join(config.out, 'app')));
});

gulp.task('lite-server', () => {
    let childProcess = exec('cd dist && lite-server');

    childProcess.stdout.on('on', (data) => {
        console.log(data.toString());
    });

    childProcess.stderr.on('on', (data) => {
        console.log(data.toString());
    });
});

gulp.task('serve', ['lint', 'transpile', 'copy'], () => {
    gulp.watch(['./app/**/*.{ts,html,css}'], ['lint', 'transpile', 'copy.assets']);
});