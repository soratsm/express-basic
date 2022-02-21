import gulp from "gulp";
import rename from "gulp-rename";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
// タスクランナー記述ファイル名は『gulpfile』で固定

// gulp.task("a", () => {
//   console.log("a");
// });
// gulp.task("b", () => {
//   console.log("b");
// });
// defaultは引数無しで渡した場合に実行される
// gulp.task("default", gulp.series(gulp.parallel("a", "b")));

// 結合・圧縮・リネーム
gulp.task("minify", () => {
  gulp
    .src(["app.js", "logger.js"], { cwd: "./" })
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/"));
});

gulp.task("default", gulp.series(gulp.parallel("minify")));
