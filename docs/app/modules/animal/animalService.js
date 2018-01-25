(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:animalService
	 * @description
	 * # animalService
	 * Service of the app
	 */

  	angular
		.module('animal')
		.factory('AnimalService', Animal);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Animal.$inject = ['$http'];

		function Animal ($http) {

			return {
				getName: getName
			};

			function getName () {
				return "prout!";
			}

		}

})();
