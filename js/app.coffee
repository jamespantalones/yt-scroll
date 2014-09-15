
Piece = ->
	self = this
	self.init()


Piece.prototype = {
	player: {}
	flag1: 0
	flag2: 0
	flag3: 0
	state: 0
	duration: 0
	chapter1: 2
	chapter2: 56
	chapter3: 100
	prefix: null
	

	init: ->
		self = this
		self.prefix = self.browserPrefix()
		
		$(->
			self.preload()
		)
		
		do addYT = ->
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
					showinfo: 0
					autoplay: 0
				}
				events: {
					'onReady': onPlayerReady
				}

			})


		onPlayerReady = (event) ->
			self.render()

	
	preload: ->
		self = this

		image = new Image()

		image.onload = ->
			setTimeout( ->
				self.render()
			, 250)

		#load image
		image.src = $('.image-hero').attr('src')

	render: ->
		self = this
		# self.player.playVideo()
		# self.player.pauseVideo()
		
		$('.frame').on('scroll', ->
			self.onScroll($('.frame'))
		)

		self.reset()

		setTimeout( ->
			self.reset()
		, 250)

		$(window).on('resize', ->
			self.reset()
		)

	reset: ->
		self = this

		#set new height
		height = $('.hero').innerHeight()
		console.log height

		#send height
		self.sendHeight(height)

	sendHeight: (height) ->
		message = {
			height: height
		}

		messageJSON = JSON.stringify(message)
		console.log messageJSON

		return window.parent.postMessage(messageJSON, '*')


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

	browserPrefix: ->
		#Gets the browser prefix
		browserPrefix = ''
		do navigator.sayswho = ->
			N = navigator.appName
			ua = navigator.userAgent
			M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i)
			tem = ua.match(/version\/([\.\d]+)/i)


			if M && tem != null
				M[2] = tem[1]
				

			M = if M[2] then [M[1], M[2]] else [navigator.appVersion, '-?']
			M = M[0]



			if (M == "Chrome")
				browserPrefix = "-webkit-"
				
			if (M == "Firefox")
				browserPrefix = "-moz-"
				
			if (M == "Safari")
				browserPrefix = "-webkit-"
				
			if (M == "MSIE")
				browserPrefix = "-ms-"
				
		return browserPrefix

}

new Piece()


