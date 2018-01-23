(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:animalCtrl
	* @description
	* # animalCtrl
	* Controller of the app
	*/

  	angular
		.module('animal')
		.controller('AnimalCtrl', Animal);

		Animal.$inject = ['AnimalService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Animal(animalService) {
			/*jshint validthis: true */
			var vm = this;
			vm.name = animalService.getName();


		}

})();
