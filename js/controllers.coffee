'use strict'

ytControllers = angular.module('ytControllers', [])



ytControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'contentfulClient'
	($scope, $http, contentfulClient) ->
		$scope.features = ''

		contentfulClient.entries({'content_type': 'tGyjv9K8h2kiGAW6qe2WI','include': 1}).then (data) ->
			console.log data
			$scope.features = data


])




ytControllers.controller('DetailCtrl', [
	'$scope'
	'$routeParams'
	'$http'
	'$location'
	'contentfulClient'
	'addBG'
	'$sce'
	($scope, $routeParams, $http, $location, contentfulClient, addBG, $sce) ->

		$scope.player = {}

		$scope.playerVars = {
		    controls: 1
		    autoplay: 0
		    modestbranding: 1
		    showinfo: 0
		    hd: 1
		}

		$scope.$on('youtube.player.ready', ($event, player) ->
			$scope.player = player
		)


		contentfulClient.entries({'sys.id': $routeParams.featureId, 'include': 10}).then (data) ->
			
			$scope.feature = data[0]

			
			$scope.fields = $scope.feature.fields
			
			#get array of all items to send to factory
			$scope.items = $scope.fields.youTubeListItems

			url = $scope.fields.heroImage.fields.file.url

			#send in image to service
			addBG.paste(url)

			#dev reference
			
		
			#add initial youtube
			$scope.video = $scope.items[0].fields.youTubeVideoId


])