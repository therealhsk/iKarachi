var Observable = require("data/observable").Observable;

var viewModel = new Observable();

function fixitViewModel(){
viewModel.btnNext = function() {
    return viewModel;
}
}
module.exports = fixitViewModel;