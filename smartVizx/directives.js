
app.directive('numericalSlider', [function () {
    return {
      restrict: 'EA',
      scope: {
        'min' : '<',
        'max' : '<',
        'value' : '=',
        'width' : '<'
      },
      templateUrl: 'smartVizx/numericalSlider.html',
      link: function (scope, element, attrs) {

          var sliderWidth = scope.width;
          var sliderLength = scope.max - scope.min;
          $('.sliderWrapper').css('width', sliderWidth + 'px');
          $('.sliderParentWrapper').css('width', sliderWidth + 70 + 'px');
          var startpixel = $('.sliderParentWrapper').offset();
          var initialPoint = ((scope.value - scope.min) * sliderWidth / sliderLength ) + startpixel.left;
          $( "#bubble" ).offset({ left: initialPoint });
          $('.colored-line').css('width', initialPoint - startpixel.left + 'px');

          $("#bubble").draggable({
            axis: "x",
            containment: ".sliderParentWrapper",
            drag: function( event, ui ) {
              var startpixel = $('.sliderParentWrapper').offset();
              var point = $('#bubble').offset().left;
              $('.colored-line').css('width', point - startpixel.left + 'px');
              scope.value = parseInt((point - startpixel.left + 1) * sliderLength / sliderWidth) + scope.min;
              scope.$digest();
            }
          });
      }
    };
}]);
