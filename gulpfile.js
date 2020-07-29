var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var htmlclean = require('gulp-htmlclean')
// tester (如果使用tester,把下面4行前面的//去掉)
// var uglifyjs = require('terser')
// var composer = require('gulp-uglify/composer')
// var pump = require('pump')
// var minify = composer(uglifyjs, console)

// babel (如果不是使用bebel,把下面兩行註釋掉)
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')

// minify js - babel（ 如果不是使用bebel,把下面註釋掉）
gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify().on('error', function (e) {
      console.log(e)
    }))
    .pipe(gulp.dest('./public'))
)

// minify js - tester (如果使用tester,把下面前面的//去掉)
// gulp.task('compress', function (cb) {
//   var options = {}
//   pump([
//     gulp.src(['./public/**/*.js', '!./public/**/*.min.js']),
//     minify(options),
//     gulp.dest('./public')
//   ],
//   cb
//   )
// })

// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true, // 清除 HTML 註釋
      collapseWhitespace: true, // 壓縮 HTML
      collapseBooleanAttributes: true, // 省略布爾屬性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, // 刪除所有空格作屬性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, // 刪除 <script> 的 type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 刪除 <style> 和 <link> 的 type="text/css"
      minifyJS: true, // 壓縮頁面 JS
      minifyCSS: true, // 壓縮頁面 CSS
      minifyURLs: true
    }))
    .pipe(gulp.dest('./public'))
})

// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel(
  'compress', 'minify-html'
))