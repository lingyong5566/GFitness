var app = angular.module('myApp', []);
app.controller('fitnessCtrl', function ($scope, $http) {
    $scope.checker = true;

    $scope.reps = [];
    var timePerRep = function () {
        return parseInt($scope.exerciseTime / $scope.repetition);
    }

    var workRestTime = function () {
        var rep = timePerRep();
        var repInSeconds = rep * 60;
        var totalRatio = parseInt($scope.work) + parseInt($scope.rest);
        console.log(repInSeconds);
        console.log(totalRatio);
        console.log($scope.work);
        var workTime = parseInt(repInSeconds / totalRatio * $scope.work);
        var restTime = parseInt(repInSeconds / totalRatio * $scope.rest);
        return [workTime, restTime];
    }
    
    $scope.plan = function () {
        var workRestTotalTime = workRestTime();
        $scope.reps = [];
        console.log(workRestTime());
        $scope.totalWorkTime = parseInt(workRestTotalTime[0] * parseInt($scope.repetition) / 60);
        console.log(workRestTotalTime[0] * parseInt($scope.repetition));
        $scope.totalRestTime = parseInt(workRestTotalTime[1] * parseInt($scope.repetition) / 60);
        $scope.totalHIITTime = (parseInt($scope.totalWorkTime) + parseInt($scope.totalRestTime));
        for (var x = 0; x < $scope.repetition; x++) {
            $scope.reps.push({ "rep": x + 1, "work": parseInt(workRestTotalTime[0]), "rest": parseInt(workRestTotalTime[1]) });
        }
        console.log($scope.reps);
        $scope.checker = false;
    }

    $scope.back = function () {
        $scope.checker = true;
    }

    $scope.goTo = function (location) {
        window.location = location + ".html";
    }

    $scope.exerciseTime = 60;
    $scope.repetition = 10;
    $scope.work = 2;
    $scope.rest = 1;
    $scope.exercise = "0";  
});

