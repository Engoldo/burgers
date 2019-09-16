global.$ = {
    bSync: require('browser-sync').create(),
    delete: require('del'),
    gulp: require('gulp'),
    autoPref: require('gulp-autoprefixer'),
    rename: require('gulp-rename'),
    sass: require('gulp-sass'),
    glob: require('gulp-sass-glob'),
    maps: require('gulp-sourcemaps'),
    csso: require('gulp-csso'),
    gIf: require('gulp-if'),
    concat: require('gulp-concat'),
    mediaGroup: require('gulp-group-css-media-queries'),
    babel: require('gulp-babel'),
    uglify: require('gulp-uglify'),
    tasks: require('./config/path.json').tasks,
    dev: process.env.NODE_ENV === "development" ? true : false,
}

for (const task in $.tasks) {
    require($.tasks[task])();
}

$.gulp.task('default',
    $.gulp.series(
        'clean',
        $.gulp.parallel(
            'copy:html',
            'copy:fonts',
            'copy:images',
            'copy:video',
            'scss',
            'scripts',
            'watch',
            'server'
        ),
    )
)

$.gulp.task('build',
    $.gulp.series(
        'clean',
        $.gulp.parallel(
            'copy:html',
            'copy:fonts',
            'copy:images',
            'copy:video',
            'scss',
            'scripts',
            'server'
        )
    )
)