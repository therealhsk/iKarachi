var dialogsModule = require("ui/dialogs");
var UserViewModel = require("../../shared/view-models/user-view-model");


var frameModule = require("ui/frame");
var page;
var email;
var password;

exports.loaded = function(args) {
    page = args.object;
    email=page.getViewById("email");
    password=page.getViewById("password");
    
    page.bindingContext = UserViewModel();
};

exports.signIn = function() {
    
    var promise = Kinvey.User.login(email.text, password.text)
    .then(function(user) {
      console.log("Succeful");
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  
    

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};