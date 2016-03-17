/*jslint maxlen:160*/
 (function (require) {
   "use strict";
   var gulp, tslint;
   gulp   = require('gulp');
   tslint = require('gulp-tslint');
   gulp.task("tslint", function() {
    return gulp.src(["src/**/*.ts"])
               .pipe(tslint.default())
               .pipe(tslint.default.reporter("verbose"));
   });
 }(require));
