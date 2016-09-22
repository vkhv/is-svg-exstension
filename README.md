# Is svg extension

Checks filename ending .svg

## Usage

```
'use strict'
const gulp = require('gulp');
const svgMin = require('gulp-svgmin');
const path = require('path');
const git = require('git.js')(path.join(__dirname, '..'));
const isSvg = require('is-svg-extension');

gulp.task('svg-minify', function() {
	git.status().then(files => {
		files.forEach(file => {
			isSvg(file.path) && gulp.src(file.path)
				.pipe(svgMin())
				.pipe(gulp.dest(path.dirname(file.path)));
		});
	}).catch(error => console.error(error))
});
```
