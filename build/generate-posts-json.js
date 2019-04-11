const fs = require('fs');
const path = require('path');

function generatePostsJson(postsDirectory = 'posts', postsJsonOutFile = 'posts.json', cb) {
  if (!fs.existsSync(postsDirectory)) throw new Error(`directory "${postsDirectory}" does not exist`);
  const fileExtensions = ['md'];
  const extensions = fileExtensions.map(ext => `.${ext.toLowerCase()}`);
  const files = fs.readdirSync(postsDirectory)
    .filter((file) => {
      return (extensions.length === 0 || extensions.indexOf(path.extname(file).toLowerCase())>-1);
    });
  console.log(`Writing ${files.length} posts from ${postsDirectory} to ${postsJsonOutFile}`);
  try {
    const json = JSON.stringify(files, null, 2);
    fs.writeFile(postsJsonOutFile, json, 'utf8', cb);
  } catch (e) {
    throw new Error(`Failed to write posts from ${postsDirectory} to ${postsJsonOutFile}\n${e}`);
  }
}

try {
  generatePostsJson(undefined, undefined, () => console.log('Success'));
} catch (e) {
  console.error(e);
}
