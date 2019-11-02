var frameModule = require ("ui/frame");
var camera = require("nativescript-camera");
var myImage;
var imageModule = require("ui/image");

var page;
var report;

exports.pageLoaded = function(args) {
    var page = args.object;
    myImage = page.getViewById("myImage");
    page.bindingContext = report;
};

exports.takePicture = function() {
    camera.requestPermissions();

    camera.takePicture()
        .then(function(imageAsset) {
        console.log("Result is an image asset instance");
        myImage.src = imageAsset;

    }).catch(function(err){
        console.log("Error --> " +err.message);
    });
}

exports.btSubmit = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/lastft/lastft");
}