module.controller("personCtrl",personCtrl)

function personCtrl($scope){
    $scope.time = 10
    $scope.person = new Person()

   $scope.getClass = function() {
    if ($scope.person.age === "" &&
        $scope.person.name ==="" &&
        $scope.person.email === "" ){
        return 'classRED'
    }else if($scope.person.age !== "" &&
            $scope.person.name !== "" &&
            $scope.person.email !== ""){
        return 'classBLUE'
    }else{
        return 'classORANGE'
    }
    return 'clasGREEN'
    }   
}



class Person
{
    constructor(name = "",email="", age="")
    {
        this.name = name
        this.email = email
        this.age = age
    }
}
