# [mere-blog](https://github.com/zvakanaka/mere-blog)
A plain JavaScript markdown blog with plugin support  

See an example blog [here](https://github.com/zvakanaka/zvakanaka.github.io)

## Posts
Write in [markdown](https://www.markdowntutorial.com) and put your `.md` files in the `posts/` directory.

Then run `$ npm run posts` to generate a `posts.json` file so your blog can build its navigation.

## Plugins
To load a plugin, add a script tag in you `index.html` with its `src` attribute set to the plugin file.

```html
<script src="dist/js/plugin-avatar.js"></script>
```

Plugins are just JavaScript files. They may listen for the `post-loaded` DOM event that is fired whenever the page is loaded or a post is switched to (event `detail` contains markdown string of post).

### Avatar
Your avatar will automatically be fetched if you are serving from [GitHub pages](https://pages.github.com/) 

[plugin source](https://github.com/zvakanaka/mere-blog/blob/master/src/js/plugin-avatar.js)

### Code Highlighting
[Rainbow](https://www.npmjs.com/package/rainbow-code) is used to highlight code surrounded in tripple backticks. Put the language key immediately after the first set of backticks to set the syntax language. 

Example:
````
```javascript
console.log('example')
```
````
Output:
```javascript
console.log('example')
```
[plugin source](https://github.com/zvakanaka/mere-blog/blob/master/src/js/plugin-code-highlight.js)

### HTML5 Video
Place the following HTML in your markdown
```html
<div class="video" src="https://example.com/example.webm"></div>
```
#### Example output below
<div class="video" src="https://raw.githubusercontent.com/zvakanaka/inspiration-is-inspiring/video/output.webm"></div>
[plugin source](https://github.com/zvakanaka/mere-blog/blob/master/src/js/plugin-html5-video.js)

### Scroll State
Since this is a single page app, preserving the scroll state across back/forward browser navigation or switching posts requires some JavaScript.

[plugin source](https://github.com/zvakanaka/mere-blog/blob/master/src/js/plugin-scroll-state.js)
