module.exports = () => {
    $.gulp.task('scripts', () => {
        return $.gulp.src('./src/js/*.js')
            .pipe($.gIf($.dev, $.maps.init()))
            .pipe($.concat('main.js'))
            .pipe($.babel({
                presets: ['@babel/env']
            }))
            .pipe($.gIf(!$.dev, $.uglify()))
            .pipe($.gIf(!$.dev, $.rename({ suffix: '.min' })))
            .pipe($.gIf($.dev, $.maps.write()))
            .pipe($.gulp.dest('dist/js'));
    })
}