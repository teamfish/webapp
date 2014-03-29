angular.module("webapp").directive "demoDirective", ->
  definition = {}
  definition.restrict = "E"
  definition.transclude = true
  definition.templateUrl = "directives/demoDirective.html"
  definition.link = (scope, element, attr) ->

  definition