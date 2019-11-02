var frameModule = require ("ui/frame");

var page;
var main;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = main;
};

exports.btfixit = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/fixit/fixit");
}

exports.btfoodguide = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/foodguide/foodguide");
}