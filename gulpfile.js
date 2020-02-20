const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

gulp.task('tidy-js', async () => {
    await gulp.src('./src/*.js', { allowEmpty: true })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
})

gulp.task('browserify', async () => {
    const b = browserify({
        entries: "./build/main.js"
    })

    await b.bundle()
        .pipe(source("wts.min.js"))
        // .pipe(gulp.dest("./build/unugly"))
        .pipe(gulp.dest("./dist"))
})

// gulp.task('ugly', async () => {
//     await gulp.src('./build/unugly/wts.js', { allowEmpty: true })
//         .pipe(uglify())
//         .pipe(concat('wts.min.js'))
//         .pipe(gulp.dest("./dist"))
// })

gulp.task('build', gulp.series(['tidy-js', 'browserify']))

gulp.task('watch', () => {
    gulp.watch('./src/*.js', gulp.series(['tidy-js', 'browserify']))
})

