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

		Animal.$inject = ['$scope','AnimalService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Animal($scope, animalService) {
			/*jshint validthis: true */
			var vm = this;
			vm.name = animalService.getName();

			// get
      vm.getAnimal = animalService.getAnimal().then((resp) => {
        vm.response = resp;
      	$scope.$apply();
    });

      // send animal
      vm.sendAnimal = function () {animalService.sendAnimal().then((resp) => {
        vm.response = resp;
      	$scope.$apply();
    });}


      // get chance on click
      vm.getChance = function () {animalService.getChance().then((resp) => {
        vm.responseChance = resp;
      $scope.$apply();
    });}

		}

})();
