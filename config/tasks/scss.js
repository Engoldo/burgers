module.exports = () => {
    $.gulp.task('scss', () => {
        return $.gulp.src('./src/scss/main.scss')
            .pipe($.glob()) 
            .pipe($.gIf($.dev, $.maps.init()))
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoPref())
            .pipe($.mediaGroup())
            .pipe($.gIf(!$.dev, $.csso()))
            .pipe($.gIf(!$.dev, $.rename({ suffix: '.min' })))
            .pipe($.gIf($.dev, $.maps.write()))
            .pipe($.gulp.dest('dist/css'))
            .pipe($.bSync.stream());
    })
}