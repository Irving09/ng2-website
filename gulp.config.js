module.exports = function() {
    const PATHS = {
        ts:         './app/**/*.ts',
        typings:    './typings/**/*.d.ts',
        assets:     './app/components/**/!(*.ts)',
        index:      './index.html',
        config:     './system.config.js',
        out:        './app/',
        bin:        './app/**/*.{js,map}'
    };

    return PATHS;
};