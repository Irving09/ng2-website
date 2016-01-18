module.exports = function() {
    const PATHS = {
        ts:         './app/**/*.ts',
        typings:    './typings/**/*.d.ts',
        assets:     './app/components/**/!(*.ts)',
        index:      './index.html',
        config:     './system.config.js',
        out:        './dist',
        deps:       [
            './node_modules/es6-shim/es6-shim.min.js',
            './node_modules/es6-shim/es6-shim.map',
            './node_modules/systemjs/dist/system.js',
            './node_modules/systemjs/dist/system.js.map',
            './node_modules/systemjs/dist/system-polyfills.js',
            './node_modules/angular2/bundles/angular2.min.js',
            './node_modules/angular2/bundles/angular2-polyfills.min.js',
            './node_modules/rxjs/bundles/Rx.min.js',
            './node_modules/rxjs/bundles/Rx.min.js.map',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/materialize-css/dist/**/*.*',
            './system.config.js'
        ]
    };

    return PATHS;
};