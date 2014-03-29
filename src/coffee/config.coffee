angular.module("webapp").config ($routeProvider) ->
  $routeProvider.when("/",
    templateUrl: "partials/demoPartial.html"
    controller: "demoController"
  ).otherwise redirectTo: "/"
