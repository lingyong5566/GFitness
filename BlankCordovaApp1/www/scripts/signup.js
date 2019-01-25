var app = angular.module('myApp', []);
app.controller('fitnessCtrl', function ($scope, $http) {

    $scope.register =  function () {
        console.log("Register called.");

        var url = serverURL() + "/user_register.php";

        var data = {
            "userid": $scope.userid,
            "password": $scope.password,
            "email": $scope.email,
            "description": $scope.description,
            "weight": $scope.weight,
            "height": $scope.height,
            "age" : $scope.age
        };
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (arr) {
                window.location = "index.html";
                alert("Successfully registered. Please continue");
            },
            error: function () {
                window.location = "index.html";
                return;
            }
        });
    }
});