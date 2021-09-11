(function() {
  'use strict';
  angular.module('LunchCheck',[]).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.food='';
    $scope.result='Please enter your food';
    $scope.displayTooMuch = function() {
      var evalFromFood = tooMuchFood($scope.food);
      $scope.result = evalFromFood;
    }
  };

  function tooMuchFood(string) {
    console.log(string);
  }
})();
