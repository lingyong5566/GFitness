var app = angular.module('myApp', []);
app.controller('fitnessCtrl', function ($scope, $http) {

    var checkInputCorrectness = function () {
        if (!isWholeNumber($scope.height)) {
            alert("Height is not whole number");
            return false;
        }
        if (!isWholeNumber($scope.age)) {
            alert("Age is not whole number");
            return false;
        }
        return true;
    }
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

        if (checkInputCorrectness()) {

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
        
    }
});