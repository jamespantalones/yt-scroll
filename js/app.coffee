'use strict'

app = angular.module('ytlist', [
	'ngRoute'
	'ngSanitize'
	'ng-contentful'
	'youtube-embed'
	'ytControllers'
	'ytDirectives'
	'ytServices'
	]
)

app.config(['$routeProvider', '$locationProvider', 'contentfulClientProvider',
	
	($routeProvider, $locationProvider, contentfulClientProvider) ->

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


		contentfulClientProvider.setSpaceId('6s2rqhmim2vw')
		contentfulClientProvider.setAccessToken('c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d')

])