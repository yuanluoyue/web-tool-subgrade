const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task('tidy-js', done => {
    gulp.src('./src/*.js')
        .pipe(babel({ 
            presets: ['@babel/env']       
      }))
        .pipe(concat('wts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
    done()
})

gulp.task('watch', () => {
    gulp.watch('./src/*.js', gulp.series(['tidy-js']))
})