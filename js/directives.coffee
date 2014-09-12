tubeDirectives = angular.module('tubeDirectives', [])

tubeDirectives.directive('youtube', [
	'$window',
	($window) ->
		return{
			restrict: 'E'
			template: '<div></div>'
			link: (scope, element, attrs) ->
				
				tag = document.createElement('script')
				tag.src = "https://www.youtube.com/iframe_api"
				firstScriptTag = document.getElementsByTagName('script')[0]
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

				player = {}
				state = 0
				width = $(document).width()
				ratio = 390 / 640
				YTwidth = width / 2 - 50
				YTheight = YTwidth * ratio

				$window.onYouTubeIframeAPIReady = ->
					player = new YT.Player(element.children()[0], {
						height: YTheight
						width: YTwidth
						videoId: 'CG48Y5dL9J8'
						playerVars: {
							autoplay: 0
							html5: 1
							theme: "light"
							modestbranding: 1
							controls: 0
						}
						events: {
							'onReady': onPlayerReady
							'onStateChange': onPlayerStateChange
						}
					})

				onPlayerReady = (event) ->
					event.target.playVideo()
					state = player.getPlayerState()
					setInterval(youTubeTime, 5000)

				onPlayerStateChange = (event) ->
					console.log event.data
					if (event.data == 1)
						initData()
					else
						return

				resizeVideo = ->
					width = $(document).width()
					YTwidth = width / 2.5
					YTheight = YTwidth * ratio
					$('#player').attr('width', YTwidth)
					$('#player').attr('height', YTheight)



}
])