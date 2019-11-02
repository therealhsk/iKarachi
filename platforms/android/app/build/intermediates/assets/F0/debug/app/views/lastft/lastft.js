var frameModule = require ("ui/frame");

var page;
var lastft;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = lastft;
};

exports.btDone = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/report/report");
}