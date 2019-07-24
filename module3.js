const module3 = angular.module("module3", [])

module3.controller("HelloCtrl3", HelloCtrl3);

function HelloCtrl3() {
    this.message = "Hello I am controller in third module"
}