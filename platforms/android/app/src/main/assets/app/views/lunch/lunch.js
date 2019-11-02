var fetch = require("fetch");
var http = require("http");
var observableModule = require("data/observable");
var observableArray = require("data/observable-array");
var beerList = new observableArray.ObservableArray([]);
var frameModule = require ("ui/frame");
var dialogs = require("ui/dialogs");

var pageData = new observableModule.Observable();
var breakfast;

exports.loaded = function(args) {
    var page = args.object;
    pageData.set("beerList", beerList);
    // it links an xml "beerList" variable to a js beerList variable
    page.bindingContext = pageData;    
    dialogs.alert({
        title: "HELP!",
        message: "YOU CAN NOW FILTER YOUR LIST OF RESTAURANTS AS PER YOUR REQUIREMENTS!",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });

    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/Lunch.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { id: r[i].id, 
            Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });

    
};

exports.btrating1 = function() {
    
}

exports.btrating2 = function() {

}

exports.btrange1 = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE RANGE MINIMUM",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/Lunch$.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });
    
}

exports.btrange2 = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE RANGE MODERATE",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/Lunch$$.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });

}

exports.btrange3 = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE RANGE HIGH",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/Lunch$$$.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });
    
}

exports.btdelivery = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE DELIVERY",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/LunchDelivery.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });

}

exports.btoutdoor = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE OUTDOOR SEATING",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/LunchOutdoor.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });

}

exports.btwifi = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE WiFi",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }



http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/LunchWifi.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });

    
}

exports.btparking = function() {
    dialogs.alert({
        title: "ALERT",
        message: "THESE ARE THE RESTAURANTS WHO HAVE PARKING",
        okButtonText: "OKAY"
    }).then(function () {
        console.log("Dialog closed!");
    });


    while (beerList.length) {
        beerList.pop();
    }
http.getJSON("http://app-1506792717.000webhostapp.com/DBMS Project/LunchParking.php").then(function (r)
{
    for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
     console.log(beer);
        beerList.push(beer);
        }
}, 
    function (e) {
         console.log(e);
     });
}

exports.bttest = function (){
    var result;
    console.log("accessed");

    http.request({
        url: "http://app-1506792717.000webhostapp.com/DBMS Project/BreakfastGeneral.php",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ WiFi: "Yes" })
    }).then(function (r) {
        console.log("accessed2");
        console.log(JSON.stringify(r));
        for (var i = 0; i< r.length; i++)
        {
        var beer = { 
            id: r[i].id,
        Restaurant: r[i].Restaurant,
        Description: r[i].Description,
        Ratings: r[i].Ratings,
        Location: r[i].Location
     }
         console.log("accessed3");
    }}, function (e) {
        // console.log("Error occurred " + e);
    });
}

