var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	//set up Routes
	$routeProvider
	.when('/contactUs',{
		templateUrl: 'contactUs.html',
		controller: 'contactUsController'
	});
});

myApp.controller('contactUsController', function($scope){
	$scope.message = "Contact Us"
});