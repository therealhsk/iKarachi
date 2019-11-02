require("./bundle-config");
var applicationModule = require("application");

var Kinvey = require('kinvey-nativescript-sdk').Kinvey;
Kinvey.init({
    appKey: 'kid_Bk-pyfusf',
    appSecret: '9a0b2e6720ef49a7a7de1b26cc88b34a'
});

Kinvey.ping()
    .then(function(response) {
        console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    })
    .catch(function(error) {
        console.log('Kinvey Ping Failed. Response: ' + error.description);
    });

applicationModule.start({ moduleName: "views/login/login" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
