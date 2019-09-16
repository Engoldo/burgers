
module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('./src/**/*.html', $.gulp.series('copy:html'))
            .on('change', $.bSync.reload)
        $.gulp.watch('./src/img/**/*.*', $.gulp.series('copy:images'))
            .on('change', $.bSync.reload)
        $.gulp.watch('./src/icons/**/*.*', $.gulp.series('copy:images'))
            .on('change', $.bSync.reload)
        $.gulp.watch('./src/scss/**/*.*', $.gulp.series('scss'))
            .on('change', $.bSync.reload)
        $.gulp.watch('./src/js/*.js', $.gulp.series('scripts'))
            .on('change', $.bSync.reload)
    })
}