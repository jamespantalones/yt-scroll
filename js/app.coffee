'use strict'

app = angular.module('ytlist', [
	'ngRoute'
	'ngSanitize'
	'ng-contentful'
	'duScroll'
	'youtube-embed'
	'ytControllers'
	'ytDirectives'
	'ytServices'
	]
)

app.config(['$routeProvider', '$locationProvider', 'contentfulClientProvider', '$sceDelegateProvider',
	
	($routeProvider, $locationProvider, contentfulClientProvider, $sceDelegateProvider) ->

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'IndexCtrl'
			})
		
		.when('/:featureId', {
			templateUrl: 'partials/detail.html',
			controller: 'DetailCtrl'
			})
		
		.otherwise({
			redirectTo: '/'
			})

		$sceDelegateProvider.resourceUrlWhitelist({
			'self',
			'http://www.youtube.com/**'
			'https://www.youtube.com/**'
			})


		contentfulClientProvider.setSpaceId('6s2rqhmim2vw')
		contentfulClientProvider.setAccessToken('c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d')

])