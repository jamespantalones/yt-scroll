'use strict'

ytControllers = angular.module('ytControllers', [])

ytControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'contentfulClient'
	($scope, $http, contentfulClient) ->

		$scope.playerVars = {
		    controls: 0
		    autoplay: 0
		    modestbranding: 1
		    showinfo: 0
		}



		contentfulClient.entries({'sys.id':'5DqKC5VpHa2Mw4UkOwuYwe', 'include': 10}).then (data) ->
			$scope.feature = data[0]
			$scope.fields = $scope.feature.fields
			$scope.items = $scope.fields.youTubeListItems
			console.log $scope.fields
			#add initial youtube
			$scope.video = $scope.items[0].fields.youTubeVideoId

				

			#add listener
		




])