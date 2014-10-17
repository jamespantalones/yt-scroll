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







ytDirectives.directive('lazy', ['$timeout', ($timeout) ->

	link = ($scope, element, attrs) ->
		$timeout ->
			#grab attrs from directive
			id = attrs.videoid
			thumbnail = attrs.thumbnail

			#add as data items to generated div
			element.data('youtube-id',id)
			element.data('thumbnail', thumbnail)
			
			element.lazyYT()


	return{
		link: link
	}

])


ytDirectives.directive('wrapWaypoints', ['$window', '$timeout', ($window, $timeout) ->
	
	videoBack = $('.video')
	wrapper = $('.video-wrapper')


	link = ($scope, element, attrs) ->
		
		$timeout ->
			

			swapBackground = (thumbnail, thumblur) ->
				if !thumblur
					thumblur = ''
				
				videoBack.css
					backgroundImage: "url(#{thumbnail})"
					backgroundSize: "cover"
				
				# wrapper.css
				# 	backgroundImage: "url(#{thumblur})"
				# 	backgroundSize: "cover"

				#update current time
			

			wrapMedia = ->
				item = $('.item')

				item.waypoint({
					context: '.frame'
					offset: '50%'
					handler: (direction) ->
						active = $(this)
						#will check for existence
						preVideo = active.prev().data "id"
						console.log preVideo
						
						videoId = active.data "id"
						thumbnail = active.data "thumbnail"
						thumblur = active.data "thumblur"

						#grab timecode
						$scope.video.currentTime = active.data "time"
						chapter = active.data "chapter"


						#make sure we actually have a time
						if !$scope.time
							$scope.time = 0


						if direction == 'down'
							swapBackground(thumbnail, thumblur)
						if direction == 'up'

							if preVideo
								swapBackground(thumbnail, thumblur)
							else
								swapBackground($scope.thumbMaster.initBackground)

						})
			

			wrapMedia()


	return{
		link: link
	}

])





ytDirectives.directive('triggerPlay', ->


	link = ($scope, element, attrs) ->



	return{
		link: link
	}
)


