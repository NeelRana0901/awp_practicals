var myApp = angular.module("myApp", []);
myApp.controller("HelloWorldCtrl", function ($scope)
{
    $scope.person =
     {
        name : "Neel Rana",
        age : "22",
        mobile : "XXXXX-XXXXX",
        emails : [
            {description:'College ',email:'neelrana.it20@scet.ac.in'},
            {description:'Personal 1',email:'jbond***@yahoo.com'},
            {description:'Personal 2',email:'james***@gmail.com'}
        ]
    };
});