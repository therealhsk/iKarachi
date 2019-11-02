var frameModule = require ("ui/frame");

var page;
var record;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = record;
};

exports.btBack = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/incidents/incidents");
}
