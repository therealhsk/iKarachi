var Observable = require("data/observable").Observable;
var viewModel = new Observable();

function MainViewModel(){
viewModel.btfixit = function() {
    return viewModel;
}
viewModel.btfoodguide = function() {
    return viewModel;
}
}
module.exports = MainViewModel;