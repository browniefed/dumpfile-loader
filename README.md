# dumpfile loader for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)


## Why

There was nothing out there, or I didn't understand webpack well enough to dump raw strings to a file, and pass along an arbitrary path.
This mainly is for CSS, hot modules, and making sure our images are getting referenced from the right directory.

So just tell dumpfile where to dump the css, and what url it should export into the browser.

MAKE SURE YOU ADD [hash]. If you do not add hash for your CSS it will not cause the browser to invalidate it and ultimately won't refresh.


``` javascript
    stylesheetLoaders[ext] = "style-loader/url!dumpfile-loader?path=" + path.resolve(__dirname, '../.../some/arbitrary/path/to/put/the/css/file/app.css') + "&browserUrl=themes/contour/css/app.css[hash]!sass-loader";
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
