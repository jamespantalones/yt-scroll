'use strict'

ytServices = angular.module('ytServices', [])


ytServices.factory('heightService', ['$rootScope', ($rootScope) ->

	getHeight = ->
		return $('.frame').height()


	
	sendHeight = (height) ->
		message = {height: height}
		messageJSON = JSON.stringify(message)
		
		console.log messageJSON
		$rootScope.$broadcast('loaded')
				
		return window.parent.postMessage(messageJSON, '*')



	window.addEventListener('resize', ->
			width = $(window).width()
			
			if width < 768
				$rootScope.$broadcast('mobile')

			if width >= 768
				$rootScope.$broadcast('desktop')

			sendHeight(getHeight())
		)

	width = ->
		width = $(window).width()
		return width


	return{
		sendHeight: ->
			return sendHeight(getHeight())
		getWidth: ->
			return $(window).width()
	}

])

ytServices.factory('initVidStyles', ->

	return{
		opacity: 0
	}

)

ytServices.factory('initThumbStyles', ->

	return{
		backgroundImage: 'none'
		backgroundSize: 'cover'
		backgroundPosition: 'center center'
	}

)

ytServices.factory('initButtonStyles', ->
	
	return{
		display: 'block'
	}
)


ytServices.factory('initHeroStyles', ->
	
	return{
		backgroundImage: 'none'
		backgroundSize: 'cover'
		backgroundPosition: 'center center'
	}
)
