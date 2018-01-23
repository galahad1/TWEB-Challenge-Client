(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:animalTest
	 * @description
	 * # animalTest
	 * Test of the app
	 */

	describe('animal test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('challenge-client');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AnimalCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
