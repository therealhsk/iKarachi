var frameModule = require ("ui/frame");

var page;
var fixit;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = fixit;
};

exports.btRecord = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/record/record");
}

exports.btReported = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/reported/reported");
}

exports.btReport = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/report/report");
}