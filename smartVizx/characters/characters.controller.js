

app.controller('charactersCtrl', ['$scope',
  function($scope) {

    $scope.reverseChars = function() {
      var alphabets = [];     // Temporary empty array
      $scope.reversedString = [];
      for(var i=0; i<$scope.characterInput.length; i++) {
        if($scope.characterInput[i].match(/^[A-Za-z]+$/)) {
          // Stroring all characters in temp array
          alphabets.push($scope.characterInput[i]);
        }
      }
      // Reversing temp array
      alphabets.reverse();

      var j=0;
      for(var i=0; i<$scope.characterInput.length; i++) {
        if($scope.characterInput[i].match(/^[A-Za-z]+$/)) {
          $scope.reversedString.push(alphabets[j]);
          j++;
        }
        else {
          $scope.reversedString.push($scope.characterInput[i]);
        }
      }
      $scope.reversedString = $scope.reversedString.join('');
    }

}]);
