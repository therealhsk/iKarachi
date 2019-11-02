var frameModule = require ("ui/frame");

var page;
var reported;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = reported;
};

exports.btBack = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/incidents/incidents");
}
