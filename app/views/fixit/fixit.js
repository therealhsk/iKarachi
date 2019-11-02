var frameModule = require ("ui/frame");

var page;
var fixit;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = fixit;
};

exports.btNext = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/incidents/incidents");
}