const gulp = require('gulp'),
  fs = require('fs'),
  path = require('path'),
  del = require('del'),
  rename = require('gulp-rename'),
  cleanCSS = require('gulp-clean-css');

//put together posts.json based on md files in /posts/
gulp.task('nav', function (next) {
  const directory = `posts`;
  if (!fs.existsSync(directory)) return { err: `directory "${directory}" does not exist` };
  const fileExtensions = ['md'];
  const extensions = fileExtensions.map(ext => `.${ext.toLowerCase()}`);
  let files = fs.readdirSync(directory)
    .filter(function(file) {
      return (extensions.length === 0 || extensions.indexOf(path.extname(file).toLowerCase())>-1);
    });
  const json = JSON.stringify(files, null, 2);
  fs.writeFile('posts.json', json, 'utf8', next());
});


gulp.task('clean', function() {
  return del(['dist']);
});

function addSource(source, newName) {
  let fileType = source.split('.')[source.split('.').length-1];
  gulp.src(source)
    .pipe(rename(newName ? newName : source.split('/')[source.split('/').length-1]))
    .pipe(gulp.dest(`./dist/${fileType}/`));
}

gulp.task('dist', ['clean'], function (cb) {
  //TODO: check for css/markdown.css and conditionally load github-markdown
  addSource('./bower_components/github-markdown-css/github-markdown.css', 'markdown.css');
  addSource('./src/css/main.css');
  addSource('./bower_components/marked/marked.min.js');
  addSource('./src/js/main.js');
  addSource('./src/js/plugin-html5-video.js');
  addSource('./src/js/plugin-code-highlight.js');
  addSource('./bower_components/rainbow/dist/rainbow.min.js');
  addSource('./bower_components/rainbow/themes/css/github.css', 'rainbow.css');
});

gulp.task('default', ['nav', 'dist']);
