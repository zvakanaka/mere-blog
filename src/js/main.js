/* global marked */
function getFile(url, callback, parseJSON) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      if (parseJSON) callback(JSON.parse(xmlhttp.responseText));
      else callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function setMarkdown(file, usePushState) { // file contains extension, pushState creates entry in history
  getFile(`posts/${file}`, (post) => {
    document.querySelector('.markdown-body').innerHTML = marked(post);
    // dispatch event for plugin-html5-video.js
    const postLoaded = new CustomEvent('postLoaded', { detail: { name: post }});
    document.dispatchEvent(postLoaded);
    // highlight post in sidebar
    const displayedArticle = document.querySelector('.displayed-article');
    if (displayedArticle) displayedArticle.classList.remove('displayed-article');
    const li = document.getElementById(`${file}`);
    li && li.classList.add('displayed-article');
  });
  if (usePushState && history.pushState) history.pushState(null, null, `#${file}`);
  else if (history.replaceState) history.replaceState(null, null, `#${file}`);
  else location.hash = `#${file}`; // browsers with no hash support
}

function getHash() {
  if (window.location.hash) return window.location.hash.substring(1);
  return null;
}

window.onhashchange = () => { // handle browser back/forward
  setMarkdown(getHash(), false);
};

getFile('posts.json', (posts) => { // load posts into nav
  let ul = document.createElement('ul');
  posts.forEach((post) => {
    let li = document.createElement('li');
    if (post.hasOwnProperty('folder')) {
      li.classList.add('folder');
      li.textContent = post.folder.split('_').join(' ');
      const ul2 = document.createElement('ul');
      console.log(post);
      post.articles.forEach(fileName => {
        const li2 = document.createElement('li')
        li2.textContent = fileName.substr(0, fileName.lastIndexOf('.')).split('_').join(' '); // strip extension
        li2.id = `${post.folder}/${fileName}`;
        li2.classList.add('file');
        console.log('fileName',fileName);
        li2.addEventListener('click', (ev) => {
          console.log(fileName);
          setMarkdown(`${post.folder}/${fileName}`, true);
        });
        ul2.appendChild(li2);
      });
      li.appendChild(ul2);
    } else if (post.hasOwnProperty('file')) {
      const fileName = post.file;
      li.textContent = fileName.substr(0, fileName.lastIndexOf('.')).split('_').join(' '); // strip extension
      li.id = fileName;
      li.classList.add('file');
      li.addEventListener('click', (ev) => {
        setMarkdown(fileName, true);
      });
    } else if (typeof post === 'string') {
      const fileName = post;
      li.textContent = fileName.substr(0, fileName.lastIndexOf('.')).split('_').join(' '); // strip extension
      li.id = fileName;
      li.classList.add('file');
      li.addEventListener('click', (ev) => {
        setMarkdown(fileName, true);
      });
    } else {
      throw new Error('Unhandled post object format', post);
    }
    ul.appendChild(li);
  });
  document.querySelector('.navigation').appendChild(ul);
  const postsMorphed = posts
  .reduce((acc, post) => {
    const fileName = typeof post === 'object' && post.hasOwnProperty('folder') ? `${post.folder}/${post.articles[0]}` : post.file;
    if (typeof post === 'object' && post.hasOwnProperty('folder')) {
      post.articles.forEach(article => {
        acc.push(`${post.folder}/${article}`);
      });
    } else if (typeof post === 'object' && post.hasOwnProperty('file')) {
      acc.push(post.file);
    } else if (typeof post === 'string') {
      acc.push(post);
    } else {
      throw new Error('Invalid post format', post);
    }
    return acc;
  }, []);
  const hash = getHash();
  if (hash) { // load post in url hash
    const selectedPost = postsMorphed
      .filter((post) => { // match with or without extension
        return post.substr(0, post.lastIndexOf('.')) === hash || post === hash;
      });
    selectedPost
      .forEach((post) => { // should be only one item in loop
        setMarkdown(post, false);
      });
    if (selectedPost.length === 0) setMarkdown(hash, false); // try unlisted article from hash
  } else setMarkdown(postsMorphed[0], false); // default - no hash specifies article
}, true);
