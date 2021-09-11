(function() {
  'use strict';
  angular.module('LunchCheck',[]).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.listOfFood="";
    $scope.result='Please enter your food';
    $scope.displayTooMuch = function() {
      var evalFromFood = tooMuchFood($scope.listOfFood);
      $scope.result = evalFromFood;
    }
  };
  function tooMuchFood(string) {
    if(string == "") {
      return "Please enter data first";
    }
    let foodArr = string.replace(/\s+/g, "").split(",");
    let n = 0;
    foodArr.forEach((item) => {
      if(item != "") {
        n ++;
      }
    });
    if(n > 3) {
      return "Too much!";
    } else {
      return "Enjoiy!";
    }

  }
})();
