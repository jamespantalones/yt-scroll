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
	'$rootScope'
	'$routeParams'
	'$http'
	'$location'
	'contentfulClient'
	'$sce'
	'heightService'
	'initVidStyles'
	'initThumbStyles'
	'initButtonStyles',
	'initHeroStyles',
	($scope, $rootScope, $routeParams, $http, $location, contentfulClient, $sce, heightService, initVidStyles, initThumbStyles, initButtonStyles, initHeroStyles) ->

		converter = new Showdown.converter()
		

		#inits
		$scope.player = {}
		$scope.video = {}
		$scope.video.currentTime = 0
		$scope.video.id = ''
		$scope.dataready = false

		$scope.vidMaster = initVidStyles
		$scope.thumbMaster = initThumbStyles
		$scope.buttonMaster = initButtonStyles
		$scope.heroMaster = initHeroStyles

		$scope.youTubePrefix = '//www.youtube.com/embed/'
		$scope.youTubeParams = '?autoplay=0&loop=1&hd=1&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0'

		#init current time

		$scope.$watch("vidMaster", ->
			$scope.videoStyles = ->
				return{
					opacity: $scope.vidMaster.opacity
				}
		)

		$scope.$watch("thumbMaster", ->
			$scope.thumbStyles = ->
				return{
					backgroundImage: $scope.thumbMaster.backgroundImage
				}
		)

		$scope.$watch("buttonMaster", ->
			$scope.buttonStyles = ->
				return{
					display: $scope.buttonMaster.display
				}
		)

		$scope.$watch("heroMaster", ->
			$scope.heroStyles = ->
				return{
					backgroundImage: $scope.heroMaster.backgroundImage
				}
		)

		

		

		$scope.playerVars = {
		    controls: 0
		    autoplay: 0
		    modestbranding: 1
		    showinfo: 0
		    hd: 1
		}

		$scope.$on('youtube.player.ready', ($event, player) ->
			console.log 'ready'
			$scope.player = player
		)



		#GRAB DATA
		contentfulClient.entries({'sys.id': $routeParams.featureId, 'include': 10}).then (data) ->
			
			$scope.feature = data[0]

			$scope.fields = $scope.feature.fields

			console.log $scope.fields


			for item in $scope.fields.youTubeListItems
				text = item.fields.bodyText
				text = converter.makeHtml(text)

			
			#parse markdown
			$scope.fields.introText = converter.makeHtml($scope.fields.introText)
			
			#get array of all items to send to factory
			$scope.items = $scope.fields.youTubeListItems

			#init video
			$scope.video.id = $scope.items[0].fields.youTubeVideoId
		
			#add initial background thumbnail for start purposes
			$scope.thumbMaster.backgroundImage = "url(#{$scope.fields.heroImage.fields.file.url}?w=500)"
			$scope.thumbMaster.initBackground = $scope.fields.heroImage.fields.file.url
			$scope.thumbInit = "url(#{$scope.fields.heroImage.fields.file.url}?w=500)"
			
			$scope.thumbMaster.backgroundSize = 'cover'


			#set data live
			$scope.dataready = true


			#onclick handlers
			$scope.playVideo = (currentTime) ->
				#bring in video. using fade instead of show for firefox' sake
				$scope.vidMaster.opacity = 1
				
				$scope.thumbMaster.backgroundImage = 'none'
				
				$scope.buttonMaster.display = 'none'
				
				$scope.player.seekTo(currentTime)
				
				$scope.player.playVideo()

			#allow editors html
			$scope.trust = (body) ->
				return $sce.trustAsHtml(body)
				








])