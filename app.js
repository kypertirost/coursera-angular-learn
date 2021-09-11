(function(){
'use strict';
  angular.module('DIApp', [])
  .controller("DIController", DIController);
  DIController.$inject = ['$scope', '$filter'];//for minification
  function DIController($scope, $filter){
    $scope.name = "Kyper";
    $scope.upper = () => {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
  }
})();
// !function(){"use strict";function e(e,n){e.name="Kyper",e.upper=(()=>{var r=n("uppercase");e.name=r(e.name)})}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
