'use strict';

var customersApp = angular.module('customers');

// Customers controller
customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers', '$modal', '$log',
	function($scope, $stateParams, Authentication, Customers, $modal, $log) {
		
		this.authentication = Authentication;

		// Find a list of Customers
		this.customers = Customers.query();

		// Open a modal window to update a single customer record
		this.modalUpdate = function (size, selectedCustomer) {

			var modalInstance = $modal.open({
				templateUrl: 'modules/customers/views/edit-customer.client.view.html',
				controller: function ($scope, $modalInstance, customer) {
					$scope.customer = customer;

					$scope.ok = function () {
						if(updateCustomerForm.$valid) {
							$modalInstance.close($scope.customer);
						}
					};

					$scope.cancel = function () {
						$modalInstance.dismiss('cancel');
					};
				},
				size: size,
				resolve: {
					customer: function () {
						return selectedCustomer;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

	}
]);

// Customers create controller
customersApp.controller('CustomersCreateController', ['$scope', 'Customers',
	function($scope, Customers) {
		
		


	}
]);

// Customers edit controller
customersApp.controller('CustomersUpdateController', ['$scope','Customers',
	function($scope, Customers) {
		
		// Update existing Customer
		this.update = function(updatedCustomer) {
			var customer = updatedCustomer;

			customer.$update(function() {

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


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

		

		

		// // Find existing Customer
		// $scope.findOne = function() {
		// 	$scope.customer = Customers.get({ 
		// 		customerId: $stateParams.customerId
		// 	});
		// };
	