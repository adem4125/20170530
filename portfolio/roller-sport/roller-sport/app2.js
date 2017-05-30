var myApp = angular.module('myApp', ['ngRoute']);


// ROUTES

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'main.html',
        // controller: 'mainController'
    })
    
    .when('/Declaration', {
        templateUrl: 'Declaration.html',
        // controller: 'secondController'
    })

    .when('/news', {
        templateUrl: 'news.html',
        // controller: 'secondController'
    })

    .when('/movie', {
        templateUrl: 'movie.html',
        // controller: 'secondController'
    })

    .when('/mail', {
        templateUrl: 'mail.html',
        // controller: 'secondController'
    })

    .when('/speed', {
        templateUrl: 'speed.html',
        // controller: 'secondController'
    })
    
    .when('/Presi', {
        templateUrl: 'Presi.html',
        // controller: 'secondController'
    })

    .when('/images', {
        templateUrl: 'images.html',
        // controller: 'secondController'
    })

    .when('/History', {
        templateUrl: 'History.html',
        // controller: 'secondController'
    })

    .when('/folder', {
        templateUrl: 'folder.html',
        // controller: 'secondController'
    })
    
    .when('/graph', {
        templateUrl: 'graph.html',
        // controller: 'secondController'
    })

    .when('/Committee', {
        templateUrl: 'Committee.html',
        // controller: 'secondController'
    })

    .when('/contact', {
        templateUrl: 'contact.html',
        // controller: 'secondController'
    })

    .when('/aggressive', {
        templateUrl: 'aggressive.html',
        // controller: 'secondController'
    })
    
    .when('/12.3', {
        templateUrl: '12.3.html',
        // controller: 'GreetingCtrl'
    })
    
    .when('/12.4', {
        templateUrl: '12.4.html',
        // controller: 'secondController'
    })

    .when('/12.5', {
        templateUrl: '12.5.html',
        // controller: 'secondController'
    })

    .when('/12.6', {
        templateUrl: '12.6.html',
        // controller: 'secondController'
    })
    
    .when('/2016 Asian International Roller Sport Open', {
        templateUrl: '2016 Asian International Roller Sport Open.html',
        // controller: 'GreetingCtrl'
    })
    
    .when('/figure1', {
        templateUrl: 'figure1.html',
        // controller: 'GreetingCtrl'
    })
    
    .when('/figure2', {
        templateUrl: 'figure2.html',
        // controller: 'secondController'
    })

    .when('/figure3', {
        templateUrl: 'figure3.html',
        // controller: 'secondController'
    })

    .when('/figure4', {
        templateUrl: 'figure4.html',
        // controller: 'secondController'
    })
    
    .when('/hockey1', {
        templateUrl: 'hockey1.html',
        // controller: 'GreetingCtrl'
    })
    
    .when('/hockey2', {
        templateUrl: 'hockey2.html',
        // controller: 'GreetingCtrl'
    })
    
    .when('/text010', {
        templateUrl: 'text010.html',
        // controller: 'GreetingCtrl'
    })
    
    
     .otherwise({
        redirectTo: '/'
    });   
});



