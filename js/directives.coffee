'use strict'

ytDirectives = angular.module('ytDirectives', [])

ytDirectives.directive('sticky', ->

	link = ($scope, element, attrs) ->

		element.waypoint({
			context: '.frame'
			offset: '-6.25%'
			handler: (direction) ->
				if direction == 'down'
					element.addClass "sticky"
				else
					element.removeClass "sticky"
			})

		return{
			link: link
		}


)

ytDirectives.directive('wrap', ->

	counter = 1
	
	link = ($scope, element, attrs) ->
		#give each element a unique class
		element.addClass("item" + counter)
		
		#set up waypoint for each item
		$('.item' + counter).waypoint({
			context: '.frame'
			offset: '10%'
			handler: (direction) ->
				active = $(this)
				videoId = active.data "id"
				chapter = active.data "chapter"

				if direction == 'down'
					
					if chapter == 1
						#video is already loaded, so no need to reload
						return
					$scope.player.cueVideoById(videoId)

				else
					return
				
			
				$scope.player.cueVideoById(videoId)
			

			}).waypoint({
				
				context: '.frame'
				offset: '80%'
				
				handler: (direction) ->
					
					active = $(this)
					videoId = active.data "id"
					preVideo = active.prev().data "id"
					chapter = active.data "chapter"
					
					if direction == 'up'
						if active.prev().length
							$scope.player.cueVideoById(preVideo)
						else
							return
				})

			

		#increment counter
		counter++


	return{
		link: link
	}

)