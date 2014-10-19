'use strict'

ytServices = angular.module('ytServices', [])



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
