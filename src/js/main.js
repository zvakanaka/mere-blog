/* global marked */
function getFile(url, callback, parseJSON) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      if (parseJSON) callback(JSON.parse(xmlhttp.responseText));
      else callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function setMarkdown(file, usePushState) {//file contains extension, pushState creates entry in history
  getFile(`posts/${file}`, function(post) {
    document.querySelector('.markdown-body').innerHTML = marked(post);
    //dispatch event for plugin-html5-video.js
    const postLoaded = new CustomEvent('postLoaded', { detail: { name: post }});
    document.dispatchEvent(postLoaded);
    //highlight post in sidebar
    const displayedArticle = document.querySelector('.displayed-article');
    if (displayedArticle) displayedArticle.classList.remove('displayed-article');
    const li = document.getElementById(`${file}`);
    li && li.classList.add('displayed-article');
  });
  if (usePushState && history.pushState) history.pushState(null, null, `#${file}`);
  else if (history.replaceState) history.replaceState(null, null, `#${file}`);
  else location.hash = `#${file}`;//browsers with no hash support
}

function getHash() {
  if (window.location.hash) return window.location.hash.substring(1);
  return null;
}

window.onhashchange = function() {//handle browser back/forward
  setMarkdown(getHash(), false);
};

getFile('posts.json', function loadPostsIntoNav(posts) {
  let ul = document.createElement('ul');
  posts.forEach(function(post) {
    let li = document.createElement('li');
    li.textContent = post.substr(0, post.lastIndexOf('.')).split('_').join(' ');//strip extension
    li.id = post;
    li.addEventListener('click', function(ev) {
      setMarkdown(post, true);
    });
    ul.appendChild(li);
  });
  document.querySelector('.navigation').appendChild(ul);
  const hash = getHash();
  if (hash) {//load post in url hash
    const selectedPost = posts
      .filter(function(post) {//match with or without extension
        return post.substr(0, post.lastIndexOf('.')) === hash || post === hash;
      });
    selectedPost
      .forEach(function(post) {//should be only one item in loop
        setMarkdown(post, false);
      });
    if (selectedPost.length === 0) setMarkdown(hash, false); // try unlisted article from hash
  } else setMarkdown(posts[0], false);//default - no hash specifies article
}, true);
