var myApp = angular.module('myApp', ['ngRoute']);


// ROUTES

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
	.when('/index', {
        templateUrl: 'index.html',
        controller: 'mainController'
    })
	
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
    
    .when('/page-1', {
        templateUrl: 'page-1.html',
        controller: 'secondController'
    })

    .when('/page-2', {
        templateUrl: 'page-2.html',
        controller: 'secondController'
    })

    .when('/page-0401', {
        templateUrl: 'page-0401.html',
        controller: 'secondController'
    })
	
	.when('/page-0415', {
        templateUrl: 'page-0415.html',
        controller: 'secondController'
    })
    
    .when('/page-0527', {
        templateUrl: 'page-0527.html',
        controller: 'secondController'
    })
	
	.when('/page-0528', {
        templateUrl: 'page-0528.html',
        controller: 'secondController'
    })

    .when('/main-2', {
        templateUrl: 'main-2.html',
        controller: 'secondController'
    })

    .when('/enter', {
        templateUrl: 'enter.html',
        controller: 'secondController'
    })
	
	 .when('/7777', {
        templateUrl: '7777.html',
        controller: 'secondController'
    })
     .otherwise({
        redirectTo: '/'
    });   

});

