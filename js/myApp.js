var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	//set up Routes
	$routeProvider
	.when('/index', {
		templateUrl: 'index.html',
		controller: 'indexController'
	})
	.when('/about', {
		templateUrl: 'about.html',
		controller: 'aboutController'
	})
	.when('/features', {
		templateUrl: 'features.html',
		controller: 'featuresController'
	})
	.when('/contactUs',{
		templateUrl: 'contactUs.html',
		controller: 'contactUsController'
	})
	.when('/', {
		templateUrl: 'index.html',
		controller: 'indexController'
	});
});

myApp.controller('indexController', function($scope){
	$scope.message = "Home";
});

myApp.controller('aboutController',function($scope){
	$scope.message = "About";
});

myApp.controller('featuresController', function($scope){
	$scope.message = "Features";
});

myApp.controller('contactUsController', function($scope){
	$scope.message = "Contact Us";
});


