
app.controller('mainCtrl', ['$scope', '$location',
  function($scope, $location) {

    $scope.activeTab = $location.path().replace(/\//g, "");
    $scope.changeActiveClass = function(value) {
      $scope.activeTab = value;
    }

}]);
