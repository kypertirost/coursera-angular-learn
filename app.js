(function(){
'use strict';
  angular.module('DIApp', [])
  .controller("DIController", DIController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);
  DIController.$inject = ['$scope', '$filter', 'lovesFilter'];//for minification
  function DIController($scope, $filter, lovesFilter){
    $scope.name = "Kyper";
    $scope.upper = () => {
        $scope.name = lovesFilter($scope.name);
    };
  }

  function LovesFilter(){
    return function(input) {
      input = input || "";
      input = input.replace("likes", "love");
      return input;
    }
  }

  function TruthFilter(){
    return function(input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    }
  }
})();
// !function(){"use strict";function e(e,n){e.name="Kyper",e.upper=(()=>{var r=n("uppercase");e.name=r(e.name)})}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
