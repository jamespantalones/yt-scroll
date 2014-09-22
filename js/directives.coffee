'use strict'

ytDirectives = angular.module('ytDirectives', [])


ytDirectives.directive('addBackground', ->
	
	
	link = ($scope, element, attrs) ->
		background = element.data 'image'
		console.log background
		
		element.css
			'background': 'black'

		return{
			link: link
		}

)





ytDirectives.directive('sticky', ->

	link = ($scope, element, attrs) ->

		element.waypoint({
			context: '.frame'
			offset: 50
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
				
				#grab timecode
				time = active.data "time"
				
				if !time
					time = 0
				
				chapter = active.data "chapter"

				if direction == 'down'
					
					if chapter == 1
						#video is already loaded, so no need to reload
						return
					$scope.player.cueVideoById(videoId, time)

				else
					return
				
			
				$scope.player.cueVideoById(videoId, time)
			

			}).waypoint({
				
				context: '.frame'
				offset: '80%'
				
				handler: (direction) ->
					
					active = $(this)
					videoId = active.data "id"
					preVideo = active.prev().data "id"
					time = active.data "time"
					if !time
						time = 0
					chapter = active.data "chapter"
					
					if direction == 'up'
						if active.prev().length
							$scope.player.cueVideoById(preVideo, time)
						else
							return
				})

			

		#increment counter
		counter++


	return{
		link: link
	}

)

