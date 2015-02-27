/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */
var loaderUtils = require("loader-utils");
var path = require("path");
var fs = require('fs-extra');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    var callback = this.async();

    if(!this.emitFile) throw new Error("emitFile is required from module system");
    var query = loaderUtils.parseQuery(this.query),
        dumpFile = query.path,
        exportUrl = query.browserUrl;

    var url = loaderUtils.interpolateName(this, dumpFile || "[hash].[ext]", {
        context: query.context || this.options.context,
        content: content,
        regExp: query.regExp
    });

    var browserUrl = loaderUtils.interpolateName(this, exportUrl || "[hash].[ext]", {
        context: query.context || this.options.context,
        content: content,
        regExp: query.regExp
    });

    fs.outputFile(url, content.toString(), function() {
       callback(null, "module.exports = " + JSON.stringify(browserUrl));
    });
}
module.exports.raw = true;