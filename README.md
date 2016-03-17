# gulp_error
error in gulp task

install:

    npm i

then to see the error run:

    gulp tslint


this will result in this error:

> [17:26:58] Using gulpfile /var/www/tests/gulp_error/gulpfile.js [17:26:58] Starting 'tslint'... [17:26:58] 'tslint' errored after 6.08 ms [17:26:58] TypeError: undefined is not a function at Gulp. (/var/www/tests/gulp_error/gulpfile.js:9:36) at module.exports (/var/www/tests/gulp_error/node_modules/gulp/node_modules/orchestrator/lib/runTask.js:34:7) at Gulp.Orchestrator._runTask (/var/www/tests/gulp_error/node_modules/gulp/node_modules/orchestrator/index.js:273:3) at Gulp.Orchestrator._runStep (/var/www/tests/gulp_error/node_modules/gulp/node_modules/orchestrator/index.js:214:10) at Gulp.Orchestrator.start (/var/www/tests/gulp_error/node_modules/gulp/node_modules/orchestrator/index.js:134:8) at /home/username/.nvm/versions/node/v0.12.12/lib/node_modules/gulp/bin/gulp.js:129:20 at process._tickCallback (node.js:355:11) at Function.Module.runMain (module.js:503:11) at startup (node.js:129:16) at node.js:814:3
