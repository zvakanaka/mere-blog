document.addEventListener('postLoaded', function highlightCode() {
  let url = '../../bower_components/rainbow/dist/rainbow.min.js';
  var script = document.createElement('script');
  script.setAttribute('src', url);
  document.head.appendChild(script);
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', '../../bower_components/rainbow/themes/css/github.css');
  document.head.appendChild(link);
  script.onload = function() {
    Rainbow.color();
  };
  // let pres = [].slice.call(document.getElementsByClassName('pre'))
  //   .forEach(function(pre) {
  //     let preEl = document.createElement('video');
  //     preEl.setAttribute('controls', '');
  //     // preEl.setAttribute('preload', 'none');
  //     let source = document.createElement('source');
  //     source.setAttribute('src', pre.getAttribute('src'));
  //     preEl.appendChild(source);
  //     pre.appendChild(preEl);
  //   });
});
