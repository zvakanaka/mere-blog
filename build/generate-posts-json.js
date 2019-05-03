const fs = require('fs');
const dirsInDir = require('dirs-in-dir');
const filesInDir = require('files-in-dir');

// Example output:
// [
//   {
//     folder: "books",
//     articles: [ "mans_search_for_meaning.md" ]
//   },
//   { file: "about.md" }
// ]
function generatePostsJson(postsDirectory = 'posts', postsJsonOutFile = 'posts.json', cb) {
  const files = filesInDir(postsDirectory, ['md']);
  const postsArr = files.map(file => ({file}));
  dirsInDir(postsDirectory).forEach(dirName => {
    const filesWithinDir = filesInDir(`${postsDirectory}/${dirName}`);
    postsArr.push({folder: dirName, articles: filesWithinDir});
  })
  console.log(`Writing ${postsArr.length} posts from ${postsDirectory} to ${postsJsonOutFile}`);
  try {
    const json = JSON.stringify(postsArr, null, 2);
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
