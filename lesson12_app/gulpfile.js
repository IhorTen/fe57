let gulp = require('gulp'),
    webpackStream = require('webpack-stream'),
    named = require('vinyl-named'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');

gulp.task('server', function() {
    connect.server({
        root: './dist',
        livereload: true
    });
});

gulp.task('js', function(){
    gulp.src('./src/js/*.js')
        .pipe(named())
        .pipe(webpackStream({
            output: {
                filename: "[name].js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['env']
                        }
                    }
                ]
            }
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
})

gulp.task('html', function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})


gulp.task('watch', function(){
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/*.html', ['html']);
})

gulp.task('default', ['html', 'server', 'watch']);