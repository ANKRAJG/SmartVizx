

app.controller('parserCtrl', ['$scope',
  function($scope) {
    $scope.textType = 'text';

    $scope.checkForTextType = function() {
      if(imageUrl($scope.parserInput.replace(/\https:/g, ""))) {
        $scope.parserOutput = $scope.parserInput.replace(/\https:/g, "");
        $scope.textType = 'image_url';
      }
      else if(validURL($scope.parserInput)) {
        $scope.parserOutput = $scope.parserInput;
        $scope.textType = 'url';
      }
      else {
        $scope.parserOutput = $scope.parserInput;
        $scope.textType = 'text';
      }
    }

    function validURL(str) {
      regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
    }

    function imageUrl(str) {
      return(str.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

}]);
