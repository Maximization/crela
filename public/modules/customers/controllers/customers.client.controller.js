'use strict';

var customersApp = angular.module('customers');

// Customers controller
customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers',
	function($scope, $stateParams, Authentication, Customers) {
		
		this.authentication = Authentication;

		// Find a list of Customers
		this.customers = Customers.query();

	}
]);

// Customers create controller
customersApp.controller('CustomersCreateController', ['$scope', 'Customers',
	function($scope, Customers) {
		
		


	}
]);

// Customers edit controller
customersApp.controller('CustomersEditController', ['$scope','Customers',
	function($scope, Customers) {
		
		


	}
]);
		

		// // Create new Customer
		// $scope.create = function() {
		// 	// Create new Customer object
		// 	var customer = new Customers ({
		// 		firstName: this.firstName,
		// 		lastName: this.lastName,
		// 		email: this.email,
		// 		phone: this.phone,
		// 		company: this.company,
		// 		website: this.website,
		// 		referred: this.referred,
		// 		channel: this.channel,
		// 		industry: this.industry
		// 	});

		// 	// Redirect after save
		// 	customer.$save(function(response) {
		// 		$location.path('customers/' + response._id);

		// 		// Clear form fields
		// 		$scope.firstName = '';
		// 		$scope.lastName = '';
		// 		$scope.email = '';
		// 		$scope.phone = '';
		// 		$scope.company = '';
		// 		$scope.website = '';
		// 		$scope.referred = '';
		// 		$scope.channel = '';
		// 		$scope.industry = '';

		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };

		// // Remove existing Customer
		// $scope.remove = function(customer) {
		// 	if ( customer ) { 
		// 		customer.$remove();

		// 		for (var i in $scope.customers) {
		// 			if ($scope.customers [i] === customer) {
		// 				$scope.customers.splice(i, 1);
		// 			}
		// 		}
		// 	} else {
		// 		$scope.customer.$remove(function() {
		// 			$location.path('customers');
		// 		});
		// 	}
		// };

		// // Update existing Customer
		// $scope.update = function() {
		// 	var customer = $scope.customer;

		// 	customer.$update(function() {
		// 		$location.path('customers/' + customer._id);
		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };

		

		// // Find existing Customer
		// $scope.findOne = function() {
		// 	$scope.customer = Customers.get({ 
		// 		customerId: $stateParams.customerId
		// 	});
		// };
	