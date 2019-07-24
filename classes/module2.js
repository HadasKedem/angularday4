const module2 = angular.module("module2", [])

module2.controller("HelloCtrl2", HelloCtrl2);

function HelloCtrl2() {
    this.message = "Hello I am controller in second module"
}