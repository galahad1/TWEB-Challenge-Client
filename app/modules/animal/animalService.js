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
				getName: getName,
				sendAnimal: sendAnimal,
				getAnimal: getAnimal,
				getChance: getChance
			};

			function getName () {
				return "SuperAnimals!";
			}

			// post
      function sendAnimal () {
				let animal = {nom:"gustav", espece: "chat"};

        // post animal
        return new Promise((resolve) => {

          $http.post('https://fathomless-hollows-67012.herokuapp.com/animals',
					JSON.stringify(animal), {headers : {
						'content-type': 'application/json'
						}})
          .then(function (response) {
            resolve(response.data);
          }, function(response) {
            console.log('ERROR', response);
          });
      	});
      }

      // get
      function getAnimal () {
        // get animal
        return new Promise((resolve) => {
          $http.get('https://fathomless-hollows-67012.herokuapp.com/animals')
          .then(function (response) {
            resolve(response.data);
          }, function(response) {
            console.log('ERROR', response);
          });
      	});
      }


      function getChance () {
        // get chance
        return new Promise((resolve) => {
          $http.get('https://fathomless-hollows-67012.herokuapp.com/chance')
          .then(function (response) {
            resolve(response.data);
          }, function(response) {
            console.log('ERROR', response);
          });
      });
      }


		}

})();
