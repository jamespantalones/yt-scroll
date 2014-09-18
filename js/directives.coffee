'use strict'

ytDirectives = angular.module('ytDirectives', [])

ytDirectives.directive('playerControl', ->

	return{
			restrict: 'AE'
			replace: true
			scope:{
				video: '@'
			}
			# scope: {
			# 	videoId: '@'
			# }
			# template: "<youtube-video id={{attrs.video}} video-id={{attrs.video}}></youtube-video>"
			template: "<div youtube-video video-id={{video}} id={{video}}</div>"
			
		}
)