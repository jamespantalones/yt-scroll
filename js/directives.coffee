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

				$window.onYouTubeIframeAPIReady = ->
					player = new YT.Player(element.children()[0], {
						height: 400
						width: 600
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
							# 'onStateChange': onPlayerStateChange
						}
					})

				onPlayerReady = (event) ->
					# event.target.playVideo()
}
])