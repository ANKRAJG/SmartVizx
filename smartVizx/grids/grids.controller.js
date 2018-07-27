

app.controller('gridsCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
        $scope.gridObj = {
            height: 330,
            width: 330,
            dotRows: 5,
            dotColumns: 5,
            radius: 15,
            dotColor: '#000',
            boxColor: '#2196F3',
            pattern: 'Grid'
        }
        $scope.patterns = ['Grid', 'Checkers', 'Odd'];

        // Retrieve the Object from storage
        if(localStorage.getItem('gridObj')) {
          $scope.gridObj = JSON.parse(localStorage.getItem('gridObj'));
        }

        function createDynamicDom() {
            var diameter = $scope.gridObj.radius * 2;
            var height = $scope.gridObj.height;
            var width = $scope.gridObj.width;
            var rows = $scope.gridObj.dotRows;
            var columns = $scope.gridObj.dotColumns;

            var horizontalDiff = width - (columns * diameter);
            var gridColGap = parseFloat(horizontalDiff / (columns + 1));
            var verticalDiff = height - (rows * diameter);
            var gridRowGap = parseFloat(verticalDiff / (rows + 1));

            $('.grid-main').css('height', height + 'px');
            $('.grid-main').css('width', width + 'px');
            $('.grid-container').css('grid-template-rows', 'repeat(' + rows + ', ' + diameter + 'px');
            $('.grid-container').css('grid-template-columns', 'repeat(' + columns + ', ' + diameter + 'px');
            $('.grid-container').css('background', $scope.gridObj.boxColor);
            $('.grid-item').css('background', $scope.gridObj.dotColor);

            $('.grid-container').css('grid-column-gap', gridColGap + 'px');
            $('.grid-container').css('padding-left', gridColGap + 'px');
            $('.grid-container').css('padding-right', gridColGap + 'px');

            $('.grid-container').css('grid-row-gap', gridRowGap + 'px');
            $('.grid-container').css('padding-top', gridRowGap + 'px');
            $('.grid-container').css('padding-bottom', gridRowGap + 'px');
        }
        $timeout(function() {
          createDynamicDom();
        });

        function processDotsArray() {
            $scope.patternType = $scope.gridObj.pattern;
            var whiteFlag;
            $scope.dotsArray = [];
            var rows = $scope.gridObj.dotRows;
            var columns = $scope.gridObj.dotColumns;
            if($scope.patternType == 'Odd') {
              for (var i=0; i<rows; i++) {
                for (var j=0; j<columns; j++) {
                  if(((i % 2) !== 0) && ((j % 2) !== 0)) {
                    $scope.dotsArray.push({white: true});
                  }
                  else {
                    $scope.dotsArray.push({white: false});
                  }
                }
              }
            }
            else {
              whiteFlag = true;
              for(var i=0; i<rows; i++) {
                if((columns % 2 === 0) && (i !== 0)) {
                  whiteFlag = !whiteFlag;
                }
                for(var j=0; j<columns; j++) {
                  whiteFlag = !whiteFlag;
                  $scope.dotsArray.push({white: whiteFlag});
                }
              }
            }
        }
        processDotsArray();

        $scope.checkForHeight = function() {
          if(($scope.gridObj.dotRows * $scope.gridObj.radius * 2) > $scope.gridObj.height) {
            $scope.heightError = $scope.gridObj.dotRows * $scope.gridObj.radius * 2;
          }
          else {
            $scope.heightError = false;
          }
        }

        $scope.checkForWidth = function() {
          if(($scope.gridObj.dotColumns * $scope.gridObj.radius * 2) > $scope.gridObj.width) {
            $scope.widthError = $scope.gridObj.dotColumns * $scope.gridObj.radius * 2;
          }
          else {
            $scope.widthError = false;
          }
        }

        $scope.checkForRowDots = function() {
          if(($scope.gridObj.dotRows * $scope.gridObj.radius * 2) > $scope.gridObj.height) {
            $scope.rowDotError = parseInt($scope.gridObj.height / ($scope.gridObj.radius * 2));
          }
          else {
            $scope.rowDotError = false;
          }
        }

        $scope.checkForColDots = function() {
          if(($scope.gridObj.dotColumns * $scope.gridObj.radius * 2) > $scope.gridObj.width) {
            $scope.colDotError = parseInt($scope.gridObj.width / ($scope.gridObj.radius * 2));
          }
          else {
            $scope.colDotError = false;
          }
        }

        $scope.checkForRadius = function() {
          if(($scope.gridObj.dotColumns * $scope.gridObj.radius * 2) > $scope.gridObj.width) {
            $scope.radiusError = parseInt($scope.gridObj.width / ($scope.gridObj.dotColumns * 2));
          }
          else if(($scope.gridObj.dotRows * $scope.gridObj.radius * 2) > $scope.gridObj.height) {
            $scope.radiusError = parseInt($scope.gridObj.height / ($scope.gridObj.dotRows * 2));
          }
          else {
            $scope.radiusError = false;
          }
        }

        $scope.saveGrid = function() {
          var diameter = $scope.gridObj.radius * 2;
          var height = $scope.gridObj.height;
          var width = $scope.gridObj.width;
          var rows = $scope.gridObj.dotRows;
          var columns = $scope.gridObj.dotColumns;

          if(((rows * diameter) <= height) && ((columns * diameter) <= width)) {
            // Saving localStorage Object
            localStorage.setItem('gridObj', JSON.stringify($scope.gridObj));

            processDotsArray();
            $timeout(function() {
              createDynamicDom();
            });
          }
        }

}]);
