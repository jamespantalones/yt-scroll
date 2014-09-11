'use strict'

tubeControllers = angular.module('tubeControllers', [])

client = contentful.createClient
	accessToken: 'c74b04faaa839cf30d0fbf6d0fa5827984c15b39864d7fc3c48a6fe57ad6ad0d'
	space: '6s2rqhmim2vw'


tubeControllers.controller('IndexCtrl', [
	'$scope',
	'$http',
	($scope, $http) ->
		$scope.features = ""

		# client.entries({'content_type': '5cG88HUEHmw0qqkmGwW2e8','include': 1}).done (data) ->
		# 	$scope.$apply( ->
		# 		$scope.features = data
		# 		console.log $scope.features
		# 	)
])


tubeControllers.controller('TubeCtrl', [
	'$scope',
	'$routeParams',
	'$http',
	'$location',
	'$anchorScroll',
	'$sce',
	($scope, $routeParams, $http, $location, $anchorScroll, $sce) ->

		converter = new Showdown.converter()

		# client.entries({'sys.id': $routeParams.featureId, 'include': 10}).done (data) ->
		# 	$scope.$apply(->
		# 		$scope.feature = data[0]
		# 		console.log $scope.feature
		# 		$scope.feature.fields.body = converter.makeHtml($scope.feature.fields.body)
		# 		if $scope.feature.fields.extraBodyText
		# 			$scope.feature.fields.extraBodyText = converter.makeHtml($scope.feature.fields.extraBodyText)
		# 	)

		# 	sendHeight = (height) ->
		# 		message = {height: height}
		# 		messageJSON = JSON.stringify(message)
		# 		console.log messageJSON
		# 		return window.parent.postMessage(messageJSON, '*')

		# 	getHeight = ->
		# 		return $(document).height()

		# 	lookForResize = ->
		# 		window.addEventListener('resize', ->
		# 			sendHeight(getHeight())
		# 		)

		# 	setTimeout(lookForResize(), 2000)
		# 	sendHeight(getHeight())

			

			

		# $scope.trust = (body) ->
		# 	return $sce.trustAsHtml(body)


])