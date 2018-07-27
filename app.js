
var app = angular.module('smartVizx', ['ui.router', 'ngAnimate']);

app.run(function() {

});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/grids");

    $stateProvider.state('app', {
      url: '/',
      templateUrl: 'smartVizx/main.html',
      controller: 'mainCtrl',
      abstract: true
    })
    .state('app.grids', {
      url: 'grids',
      title: 'Grids',
      templateUrl: 'smartVizx/grids/grids.html',
      controller: 'gridsCtrl'
    })
    .state('app.slider', {
      url: 'slider',
      title: 'Slider',
      templateUrl: 'smartVizx/slider/slider.html',
      controller: 'sliderCtrl'
    })
    .state('app.parser', {
      url: 'parser',
      title: 'Parser',
      templateUrl: 'smartVizx/parser/parser.html',
      controller: 'parserCtrl'
    })
    .state('app.characters', {
      url: 'characters',
      title: 'Characters',
      templateUrl: 'smartVizx/characters/characters.html',
      controller: 'charactersCtrl'
    });

    //$locationProvider.html5Mode(true);

}]);
