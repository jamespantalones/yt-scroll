
Video = ->
	self = this
	self.init()


Video.prototype = {
	player: {}
	flag1: 0
	flag2: 0
	flag3: 0
	state: 0
	duration: 0
	chapter1: 2
	chapter2: 56
	chapter3: 100
	

	
	init: ->
		self = this
		tag = document.createElement('script')
		tag.src = "//www.youtube.com/iframe_api"
		firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

		window.onYouTubeIframeAPIReady = ->
			width = $(document).width()
			ratio = 390 / 640
			YTwidth = width / 2.5
			YTheight = YTwidth * ratio
			
			self.player = new YT.Player('player', {
				height: YTheight
				width: YTwidth
				videoId: 'CG48Y5dL9J8'
				playerVars:{
					modestBranding: 1
					controls: 0
				}
				events: {
					'onReady': onPlayerReady
				}

			})


		onPlayerReady = (event) ->
			self.render()

	

	

	render: ->
		self = this
		self.player.seekTo(5)
		self.player.playVideo()

		self.player.pauseVideo()
		
		$('.frame').on('scroll', ->
			self.onScroll($('.frame'))
		)


	onScroll: (frame) ->
		
		self = this

		video = $('.video')
		topic = $('.topic')


		
		topic.waypoint({
			continuous: false
			
			handler: (direction) ->
				currentOrder = $(this).data 'topic'
				
				if direction == 'down'
					
					if currentOrder == 1
						video.addClass "sticky"
						self.player.playVideo()
					
					if currentOrder == 2
						if self.flag2 == 0
							self.flag2 = 1
							self.player.seekTo(self.chapter2)
						else
							return
					if currentOrder == 3
						if self.flag3 == 0
							self.flag3 = 1
							self.player.seekTo(self.chapter3)
						else
							return

					else
						return
				

				if direction == 'up'
					
					if currentOrder == 1
						video.removeClass "sticky"
						self.player.pauseVideo()
					
					if currentOrder == 2
						self.flag2 = 0
						self.player.seekTo(self.chapter1)

					else if currentOrder == 3
						self.flag3 = 0
						self.player.seekTo(self.chapter2)
					
					else
						self.player.pauseVideo()

		})




	
}

new Video()


