var app = angular.module('myApp', []);
app.controller('fitnessCtrl', function ($scope, $http) {
    $scope.login = function () {
        console.log("Login called.");

        var callback = function (arr) {
            console.log("We received feedback");
            console.log(arr);
            if (arr[0].result == "0") {
                $scope.userid = "";
                $scope.password = "";
                $scope.$apply();
                alert("Wrong password");
                
            }
            else {
                alert("Login successfully");
                localStorage.setItem("userid", $scope.userid);
                window.location = "homepage.html";
            }
            
        }
        var phpToRetrieve = "/login.php";

        var data = {
            "userid": $scope.userid,
            "password": $scope.password
        }
        doAJAXCall(phpToRetrieve, data, callback, callback);
    }

    $scope.signUp =  function () {
        console.log("Sign up called.");
        window.location = "signup.html";
    }
});