'use strict'

ytControllers = angular.module('ytControllers', [])

ytControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'contentfulClient'
	'addBG'
	($scope, $http, contentfulClient, addBG) ->

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




		contentfulClient.entries({'sys.id':'5DqKC5VpHa2Mw4UkOwuYwe', 'include': 10}).then (data) ->
			
			$scope.feature = data[0]
			
			$scope.fields = $scope.feature.fields
			
			#get array of all items to send to factory
			$scope.items = $scope.fields.youTubeListItems

			url = $scope.fields.heroImage.fields.file.url

			#send in image to service
			addBG.paste(url)

			#dev reference
			console.log $scope.fields
		
			#add initial youtube
			$scope.video = $scope.items[0].fields.youTubeVideoId



				

			#add listener
		




])