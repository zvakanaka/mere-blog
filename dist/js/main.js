/* global marked */function getFile(a,b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){4===d.readyState&&200===d.status&&(c?b(JSON.parse(d.responseText)):b(d.responseText))},d.open('GET',a,!0),d.send()}function setMarkdown(a,b){//file contains extension, pushState creates entry in history
getFile(`posts/${a}`,function(b){document.querySelector('.markdown-body').innerHTML=marked(b);//dispatch event for plugin-html5-video.js
const c=new CustomEvent('postLoaded',{detail:{name:b}});document.dispatchEvent(c);//highlight post in sidebar
const d=document.querySelector('.displayed-article');d&&d.classList.remove('displayed-article');const e=document.getElementById(`${a}`);e&&e.classList.add('displayed-article')}),b&&history.pushState?history.pushState(null,null,`#${a}`):history.replaceState?history.replaceState(null,null,`#${a}`):location.hash=`#${a}`}function getHash(){return window.location.hash?window.location.hash.substring(1):null}window.onhashchange=function(){//handle browser back/forward
setMarkdown(getHash(),!1)},getFile('posts.json',function(a){let b=document.createElement('ul');a.forEach(function(a){let c=document.createElement('li');//strip extension
c.textContent=a.substr(0,a.lastIndexOf('.')).split('_').join(' '),c.id=a,c.addEventListener('click',function(){setMarkdown(a,!0)}),b.appendChild(c)}),document.querySelector('.navigation').appendChild(b);const c=getHash();if(c){//load post in url hash
const b=a.filter(function(a){//match with or without extension
return a.substr(0,a.lastIndexOf('.'))===c||a===c});b.forEach(function(a){//should be only one item in loop
setMarkdown(a,!1)}),0===b.length&&setMarkdown(c,!1)}else setMarkdown(a[0],!1);//default - no hash specifies article
},!0);