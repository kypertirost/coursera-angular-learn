(function() {
  'use strict';
  angular.module('LunchCheck',[]).controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject =['$scope'];
  function LunchCheckController($scope){
    $scope.textColor = {"color":"black"};
    $scope.listOfFood="";
    $scope.result='Please enter your food';
    $scope.displayTooMuch = function() {
      let num = calculateLength($scope.listOfFood);
      let evalFromFood = evaluateString(num);
      console.log(num);
      $scope.result = evalFromFood;
      if(num <=0) {
        $scope.textColor = {"color":"red"};
      } else {
        $scope.textColor = {"color":"green"};
      }
    }
  }
  function calculateLength(string) {
    if(string == "") {
      return 0;
    }
    let foodArr = string.replace(/\s+/g, "").split(",");
    let n = 0;
    foodArr.forEach((item) => {
      if(item != "") {
        n ++;
      }
    });
    return n;
  }
  function evaluateString(num) {
    // if(string == "") {
    //   return "Please enter data first";
    // }
    // let foodArr = string.replace(/\s+/g, "").split(",");
    // let n = 0;
    // foodArr.forEach((item) => {
    //   if(item != "") {
    //     n ++;
    //   }
    // });
    // if(n > 3) {
    //   return "Too much!";
    // } else {
    //   return "Enjoy!";
    // }
    if(num <=0 ){
      return "Please enter data first";
    } else if (num > 3){
      return "Too much!";
    } else {
      return "Enjoy!";
    }
  }
})();
