var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/samwise' ,{
      templateUrl: '/views/templates/samwise.html',
      controller: 'SamwiseController',
      controllerAs: 'samwise'
    })
    .when('/frodo' ,{
      templateUrl: '/views/templates/frodo.html',
      controller: 'FrodoController',
      controllerAs: 'Frodo'
    })
    .when('/gandalf' ,{
      templateUrl: '/views/templates/gandalf.html',
      controller: 'GandalfController',
      controllerAs: 'gandalf'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('SamwiseController', function() {
  console.log('Samwise controller running');
  var self = this;
  self.message = "Samwise controller is the best!";

});

app.controller('FrodoController', function() {
  console.log('Frodo controller running');
  var self = this;
  self.message = "Frodo controller is the best!";

});

app.controller('GandalfController', function() {
  console.log('Gandalf controller running');
  var self = this;
  self.message = "Gandalf controller is the best!";

});
