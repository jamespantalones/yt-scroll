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
			sendHeight(getHeight())
		)


	return{
		sendHeight: ->
			return sendHeight(getHeight())
	}

])
