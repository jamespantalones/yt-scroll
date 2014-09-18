'use strict'

ytServices = angular.module('ytServices', [])

ytServices.factory('addBG', ->

	addImage = (image) ->
		$('.hero').css
			'background': "url(#{image})"

	return {
		paste: (image) ->
			return addImage(image)
	}

)
