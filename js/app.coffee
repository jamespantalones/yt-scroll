'use strict'

app = angular.module('ytlist', [
	'ngRoute'
	'ngSanitize'
	'ytControllers'
	]
)

app.config(['$routeProvider', '$locationProvider', 
	
	($routeProvider, $locationProvider) ->

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'IndexCtrl'
			})
		
		.when('/:featureId', {
			templateUrl: 'partials/detail.html',
			controller: 'FeatureCtrl'
			})
		
		.otherwise({
			redirectTo: '/'
			})

])