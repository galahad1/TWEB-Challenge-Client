'use strict';

/**
 * @ngdoc function
 * @name app.route:animalRoute
 * @description
 * # animalRoute
 * Route of the app
 */

angular.module('animal')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.animal', {
				url:'/animal',
				templateUrl: 'app/modules/animal/animal.html',
				controller: 'AnimalCtrl',
				controllerAs: 'vm'
			});

		
	}]);
