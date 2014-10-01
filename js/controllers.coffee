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
	'$sce'
	'heightService'
	($scope, $routeParams, $http, $location, contentfulClient, $sce, heightService) ->

		converter = new Showdown.converter()

		$scope.player = {}

		$scope.playerVars = {
		    controls: 0
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

			console.log $scope.fields

			

			for item in $scope.fields.youTubeListItems
				text = item.fields.bodyText
				text = converter.makeHtml(text)


			$scope.trust = (body) ->
				return $sce.trustAsHtml(body)


			

			$scope.fields.introText = converter.makeHtml($scope.fields.introText)
			
			#get array of all items to send to factory
			$scope.items = $scope.fields.youTubeListItems

			url = $scope.fields.heroImage.fields.file.url

			#send in image to service
			# addBG.paste(url)

		
			#add initial youtube
			$scope.video = $scope.items[0].fields.youTubeVideoId

			#check for initial width
			$scope.width = heightService.getWidth()

			if $scope.width < 768
				$('.frame').removeClass('desktop').addClass "mobile"

			

			#listen for width
			$scope.$on('mobile', (event) ->
				$('.frame').removeClass('desktop').addClass "mobile"
				)

			$scope.$on('desktop', (event) ->
				$('.frame').removeClass('mobile').addClass "desktop"
				)


			setTimeout(heightService.sendHeight, 2000)




])