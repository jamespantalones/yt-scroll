'use strict'

tubeServices = angular.module('tubeServices', [])

tubeServices.service('playerService', [
	'$window',
	'$rootScope', 
	($window, $rootScope) ->

		$window.onYouTubeIframeAPIReady = ->
			player = new YT.Player('player', {
				height: 200
				width: 300
				videoId: 'CG48Y5dL9J8'
				events: {
					'onReady': onPlayerReady
				}
			})

		$window.onPlayerReady = (event) ->
			alert 'prepped'
])