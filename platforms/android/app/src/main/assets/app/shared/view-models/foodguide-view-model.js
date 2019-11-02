var Observable = require("data/observable").Observable;

var viewModel = new Observable();

function foodguideViewModel(){
    viewModel.btbreakfast = function() {
        return viewModel;
    }
    viewModel.btlunch = function() {
        return viewModel;
    }
    viewModel.btdinner = function() {
        return viewModel;
    }
    viewModel.btcoffee = function() {
        return viewModel;
    }
    }
module.exports = foodguideViewModel;