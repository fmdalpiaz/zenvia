'use strict';

var browserSync = require('browser-sync').create(),
    gulp = require('gulp');

gulp.task('server', function () {
    browserSync.init({
        server: { baseDir: 'src' },
        reloadDelay: 200,
        notify: false
    });

    gulp.watch(['index.html', '**/*.js']).on('change', function () {
        browserSync.reload();
    });
});

gulp.task('default', ['server']);
