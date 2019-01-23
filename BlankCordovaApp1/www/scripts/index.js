var app = angular.module('myApp', []);
app.controller('fitnessCtrl', function ($scope, $http) {
    $scope.login = function () {
        console.log("Login called.");
    }

    $scope.signUp =  function () {
        console.log("Sign up called.");
    }
});