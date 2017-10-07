document.addEventListener('postLoaded', function highlightCode() {
  let url = '../../dist/js/rainbow.min.js';
  var script = document.createElement('script');
  script.setAttribute('src', url);
  document.head.appendChild(script);
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', '../../dist/css/rainbow.css');
  document.head.appendChild(link);
  script.onload = function() {
    Rainbow.color();/* global Rainbow */
  };
});
