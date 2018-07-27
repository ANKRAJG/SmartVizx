

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

        $scope.firstDotDistance = 68;
        var sliderWidth = $('.sliderWrapper').width();
        var sliderLength = parseInt($('.right-end').text()) - parseInt($('.left-end').text());
        $('.sliderParentWrapper').css('width', sliderWidth + 70 + 'px');
        var startpixel = $('.sliderParentWrapper').offset();
        var initialPoint = (($scope.firstDotDistance - parseInt($('.left-end').text()) + 1) * sliderWidth / (100 * sliderLength/100) ) + startpixel.left;
        $( "#bubble" ).offset({ left: initialPoint });
        $('.colored-line').css('width', initialPoint - startpixel.left + 'px');

        $("#bubble").draggable({
          axis: "x",
          containment: ".sliderParentWrapper",
          drag: function( event, ui ) {
            var point = $('#bubble').offset().left;
            $('.colored-line').css('width', point - startpixel.left + 'px');
            $scope.firstDotDistance = parseInt((point - startpixel.left + 1) * (100 * sliderLength/100) / sliderWidth) + parseInt($('.left-end').text());
            $scope.$digest();
          }
        });

}]);
