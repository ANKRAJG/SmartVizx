

app.controller('sliderCtrl', ['$scope',
  function($scope) {

        $scope.slider = {
          value: 63,
          options: {
            floor: 25,
            ceil: 120,
            step: 1,
            showSelectionBar: true
          }
        }

}]);
