'use strict'

ytDirectives = angular.module('ytDirectives', [])

ytDirectives.directive('checkDevice', ['$window', '$rootScope', ($window, $rootScope) ->

	link = ($scope, element, attrs) ->

		$scope.onResize = ->
			width = $window.innerWidth
			
			if width < 1024
				element.removeClass('desktop').addClass "mobile"
				$rootScope.$broadcast('mobile')
			else
				element.removeClass("mobile").addClass "desktop"

		$scope.onResize()

		angular.element($window).bind('resize', ->
			$scope.onResize()
			)




	return{
		link: link
	}
])


ytDirectives.directive('fadeVideo', ['$window', ($window) ->

	flag = 0
	id = 0


	link = ($scope, element, attrs) ->
		$scope.fadeOutVideo = ->
			$('.hero').fadeOut()
			$('.video-wrapper').fadeIn()

		$scope.fadeInVideo = ->
			$('.hero').fadeIn()
			$('.video-wrapper').fadeOut()

		$scope.videoControl = ->
			console.log 'video contorl called'
			width = $window.innerWidth
			if width < 1024
				$.waypoints('destroy')
			else
				element.waypoint({
					context: '.frame'
					offset: '30%'
					handler: (direction) ->
						if direction == 'down'
							$scope.fadeOutVideo()
						if direction == 'up'
							$scope.fadeInVideo()
					})
		
		$scope.videoControl(element)

		angular.element($window).bind('resize', ->
			#needs to only send once DONE resizing
			clearTimeout(id)
			id = setTimeout($scope.videoControl, 1000)
		)

	return{
		link: link
	}
])




ytDirectives.directive('lazy', ->

	link = ($scope, element, attrs) ->
		id = attrs.videoid
		element.data('youtube-id',id)
		element.lazyYT()


	return{
		link: link
	}

)




ytDirectives.directive('wrap', ['$rootScope', '$window', ($rootScope, $window) ->

	counter = 1


	
	link = ($scope, element, attrs) ->

		$scope.wrapMedia = ->
			width = $window.innerWidth
			console.log 'yo'
			if width > 1024
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
						offset: '20%'
						
						handler: (direction) ->
							
							active = $(this)
							videoId = active.data "id"
							preVideo = active.prev().data "id"
							time = active.data "time"
							if !time
								time = 0
							chapter = active.data "chapter"
							
							if direction == 'up'
								if preVideo
									$scope.player.cueVideoById(preVideo, time)
								else
									return
						})

					

				#increment counter
				counter++
			else
				$.waypoints('destroy')

		$scope.wrapMedia()

		angular.element($window).bind('resize', ->
			$scope.wrapMedia()
		)


	return{
		link: link
	}

])


