'use strict'

app = angular.module('tube', [
	'ngRoute',
	'ngSanitize',
	'tubeControllers',
	'tubeDirectives'
])

app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
	$routeProvider.when('/list', {
		templateUrl: 'partials/index.html',
		controller: 'IndexCtrl'
		})
	.when('/:featureId', {
		templateUrl: 'partials/detail.html',
		controller: 'TubeCtrl'
		})
	.otherwise({
		redirectTo: '/'
		})

])

