'use strict'

ytDirectives = angular.module('ytDirectives', [])





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
					backgroundImage: "url(#{thumbnail}?w=800)"
					backgroundSize: "cover"
				
			

			wrapMedia = ->
				item = $('.item')

				item.waypoint({
					context: '.frame'
					offset: '50%'
					handler: (direction) ->
						active = $(this)
						#will check for existence
						preVideo = active.prev().data "id"
						
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
							if chapter == 1
								$('.lazyYT-button').css
									opacity: 1
	
						if direction == 'up'
							if chapter == 1
								$('.lazyYT-button').css
									opacity: 0

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


ytDirectives.directive('moveVideo', ->

	text = $('.text-wrapper')
	video = $('.video')
	frame = $('.frame')
	start = 0
	flag = 0


	
	link = ($scope, element, attrs) ->
		element.scroll ->
			offset = -text.offset().top
			shift = offset * 0.009

			


			video.css
				'-webkitTransform': "translateY(#{shift + 'px'})"
				'-mozTransform': "translateY(#{shift + 'px'})"
				'-msTransform': "translateY(#{shift + 'px'})"
				'-oTransform': "translateY(#{shift + 'px'})"
				'transform': "translateY(#{shift + 'px'})"


	return{
		link: link
	}
)


