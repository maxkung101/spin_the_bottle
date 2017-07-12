/* JavaScript Document */
var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope, $timeout, $window) {
    $scope.spinning = false; // init
    $scope.list = [];
    $scope.result = "Please take attendance first.";
    $scope.timer1 = 30; // timers
    $scope.runtimer1 = false;
    $scope.deactivate1 = false;
    $scope.timer2 = 60;
    $scope.runtimer2 = false;
    $scope.deactivate2 = false;
    $scope.myFunction = function () { // Spin the bottle
        $scope.instructions = "";
        $scope.spinning = true;
        $scope.delay = (Math.floor((Math.random() * 3)) + 3) * 1000;
        $scope.result = "Randomizing";
        $timeout(function () {
            $scope.rand = Math.floor((Math.random() * $scope.list.length) + 1) - 1;
            $scope.result = $scope.list[$scope.rand] + " will pray for us.";
            $scope.spinning = false;
        }, $scope.delay);
    }
    $scope.addIt = function () { // add a person to the list
        $scope.list.push($scope.name);
        $scope.name = "";
        if ($scope.list.length == 1) {
            $scope.result = "Not enough people. Please add more.";
        } else if ($scope.list.length == 2) {
            $scope.result = "When you're ready, press \"Go\" to begin.";
        }
    }
    $scope.reset = function () { // reset everything
        $scope.list = [];
        $scope.name = "";
        $scope.result = "Please take attendance first.";
    }
    $scope.countdown1 = function () {
        if (!$scope.runtimer1) {
            $scope.runtimer1 = true;
            $scope.countdown1();
        } else {
            $timeout(function () {
                if ($scope.timer1 == 0) {
                    $scope.runtimer1 = false;
                    $scope.timer1 = 30;
                    $window.alert("Time's up");
                } else if ($scope.deactivate1) {
                    $timeout.cancel();
                    $scope.runtimer1 = false;
                    $scope.timer1 = 30;
                    $scope.deactivate1 = false;
                } else {
                    $scope.timer1 -= 1;
                    $scope.countdown1();
                }
            }, 1000);
        }
    }
    $scope.endcountdown1 = function () {
        $scope.deactivate1 = true;
    }
    $scope.countdown2 = function () {
        if (!$scope.runtimer2) {
            $scope.runtimer2 = true;
            $scope.countdown2();
        } else {
            $timeout(function () {
                if ($scope.timer2 == 0) {
                    $scope.runtimer2 = false;
                    $scope.timer2 = 60;
                    $window.alert("Time's up");
                } else if ($scope.deactivate2) {
                    $timeout.cancel();
                    $scope.runtimer2 = false;
                    $scope.timer2 = 60;
                    $scope.deactivate2 = false;
                } else {
                    $scope.timer2 -= 1;
                    $scope.countdown2();
                }
            }, 1000);
        }
    }
    $scope.endcountdown2 = function () {
        $scope.deactivate2 = true;
    }
});