var Observable = require("data/observable").Observable;

var viewModel = new Observable();

function incidentsViewModel(){

    viewModel.btRecord = function() {
    return viewModel;
}

    viewModel.btReported = function() {
    return viewModel;
}

    viewModel.btReport = function() {
    return viewModel;
}
}
module.exports = incidentsViewModel;