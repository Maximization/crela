'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
			{
				icon: 'fa-users',
				color: 'btn-success',
				total: '20,408',
				description: 'TOTAL CUSTOMERS'
			},
			{
				icon: 'fa-calendar',
				color: 'btn-primary',
				total: '8,382',
				description: 'UPCOMING EVENTS'
			},
			{
				icon: 'fa-edit',
				color: 'btn-success',
				total: '527',
				description: 'NEW CUSTOMERS IN 24H'
			},
			{
				icon: 'fa-envelope',
				color: 'btn-info',
				total: '85,000',
				description: 'EMAILS SENT'
			},
			{
				icon: 'fa-eye',
				color: 'btn-warning',
				total: '268',
				description: 'FOLLOW UPS REQUIRED'
			},
			{
				icon: 'fa-flag',
				color: 'btn-danger',
				total: '348',
				description: 'REFERRALS TO MODERATE'
			}
		];
	}
]);