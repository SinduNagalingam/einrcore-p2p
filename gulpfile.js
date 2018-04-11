'use strict';

var gulp = require('gulp');
var einrcoreTasks = require('einrcore-build');

einrcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
