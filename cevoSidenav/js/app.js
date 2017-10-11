var app = angular.module('myApp', []);

app.directive("sideNav", function() {
  return {
    templateUrl : "views/sideNav.html"
  };
});
