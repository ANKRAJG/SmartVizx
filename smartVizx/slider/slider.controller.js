

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

        var sliderWidth = $('.sliderWrapper').width();
        $('.sliderParentWrapper').css('width', sliderWidth + 70 + 'px');
        var startpixel = $('.sliderParentWrapper').offset();
        var initialPoint = (43 * sliderWidth / 100) + startpixel.left;
        $scope.firstDotDistance = 68;
        $( "#bubble" ).offset({ left: initialPoint });
        $('.colored-line').css('width', initialPoint - startpixel.left + 'px');

        $("#bubble").draggable({
          axis: "x",
          containment: ".sliderParentWrapper",
          drag: function( event, ui ) {
            var point = $('#bubble').offset().left;
            $('.colored-line').css('width', point - startpixel.left + 'px');
            $scope.firstDotDistance = parseInt((point - startpixel.left) * 100 / sliderWidth) + 25;
            $scope.$digest();
          }
        });

}]);
