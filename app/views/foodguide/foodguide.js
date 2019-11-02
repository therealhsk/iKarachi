var frameModule = require ("ui/frame");

var page;
var fixit;

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = foodguide;
};

exports.btbreakfast = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/breakfast/breakfast");
}

exports.btlunch = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/lunch/lunch");
}

exports.btdinner = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/dinner/dinner");
}

exports.btcoffee = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/coffee/coffee");
}