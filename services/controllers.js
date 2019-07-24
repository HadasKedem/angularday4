module.controller("sumCtrl",sumCtrl)
module.controller("inputCtrl",inputCtrl)

function inputCtrl($scope,classService,abService){
    $scope.ab = abService.ab;

    $scope.classes = ["blue-brown","green-yellow"];

    $scope.saveClass = function(color) {
        if ($scope.color === "blue-brown"){
            classService.colorPOSITIVE = "classBLUE"
            classService.colorNEGATIVE = "classBROWN"
        }else{
            classService.colorPOSITIVE = "classGREEN"
            classService.colorNEGATIVE = "classYELLOW"
        }
    }   
}

function sumCtrl($scope,classService,abService){
    $scope.classes = ["blue-brown","green-yellow"];
    $scope.ab = abService.ab;

    //$scope.result = $scope.ab.a + $scope.ab.b;

    $scope.getClass = function(result) {
            if(parseInt(result) >= 0){
                return classService.colorPOSITIVE
            }
            return classService.colorNEGATIVE
        } 
    
}



