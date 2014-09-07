var tester = angular.module('tester',['ngRoute']);

tester.config(function($routeProvider){
	//set up routes
	$routeProvider
	.when('/about',{
		templateUrl:'about.html',
		controller: 'aboutController'
	})
	.when('/products',{
		templateUrl: 'products.html',
		controller: 'productsController'
	})
	.when('/stories',{
		templateUrl: 'stories.html',
		controller: 'storiesController'
	})
	.when('/contact', {
		templateUrl: 'contact.html',
		controller: 'contactController'
	});
});

tester.controller('aboutController',function($scope){
	$scope.message = "Placeholder for About";
});

tester.controller('productsController', function($scope){
	$scope.message = "Placeholder for Products";
});

tester.controller('storiesController', function($scope){
	$scope.message = "Placeholder for Stories";
});

tester.controller('contactController', function($scope){
	$scope.message ="Placeholder for Contact";
});
