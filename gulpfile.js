const gulp = require('gulp');
const ts = require('gulp-typescript');

// Pull in the project Typescript config
const tsProject = ts.createProject('tsconfig.json');
// Task to be, run when the watcher detects changes
gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(''));
});

// Set up a watcher to watch over changes
gulp.task('watch', ['scripts'], () => {
    gulp.watch('**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);