/**
What is modules : Modules is just like a container where we can defines an application
A module is created by using the AngularJS function angular.module

What is controllers : Controllers is just like a driver which works between modules and views
And also controllers is just like a construction pure javascript

*/

//Lets create a modules
var myApp =  angular.module("myModule", []);

var myController = function($scope){
  $scope.message = "Hello World !!";
};

//Lets register the controllers with above function and modules
myApp.controller("myCtrl", myController); //Register with given it's own name "myCtrl" and pull the above controllers var "myController"

/**** WE CAN HAVE ANONYMOUS FUNCTION AND REGISTER CONTROLLER IN ONE LINE *****/
/*
myApp.controller("myCtrl", function($scope){
  $scope.message = "Hello World !!";
});
*/

//Let's VIEW it using directives on modules-controllers.html
