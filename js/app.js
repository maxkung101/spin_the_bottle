var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $timeout) {
  $scope.spinning = false;
  $scope.list = [];
  $scope.result = "Create a list of members in your small group or tribe.";
  $scope.myFunction = function() {
    $scope.instructions = "";
    $scope.spinning = true;
    $scope.delay = (Math.floor((Math.random() * 3)) + 3) * 1000;
    $scope.result = "Spinning...";
    $timeout(function() {
      $scope.rand = Math.floor((Math.random() * $scope.list.length) + 1) - 1;
      $scope.result = $scope.list[$scope.rand] + " will pray for us.";
      $scope.spinning = false;
    }, $scope.delay);
  }
  $scope.addIt = function() {
    $scope.list.push($scope.name);
    $scope.name = "";
    if ($scope.list.length == 2) {
      $scope.result = "When you're ready, press \"Spin the bottle\" to begin.";
    }
  }
  $scope.reset = function() {
    $scope.list = [];
    $scope.name = "";
    $scope.result = "Create a list of members in your small group or tribe.";
  }
});