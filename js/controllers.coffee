'use strict'

ytControllers = angular.module('ytControllers', [])

ytControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	($scope, $http) ->
		$scope.list = ""
])