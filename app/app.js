var app = angular.module('ElTorito', ['ui.router', 'ngStorage', 'ElTorito.Services', 'ElTorito.Controllers']);

angular.module('ElTorito.Controllers', []);
angular.module('ElTorito.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'HomeController'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'HomeController'
        })
        .state('client', {
            url: '/client',
            templateUrl: '/views/client.html',
            controller: 'HomeController'
        })
        .state('waiter', {
            url: '/waiter',
            templateUrl: '/views/waiter.html',
            controller: 'HomeController'
        })
        .state('order', {
            url: '/order',
            templateUrl: '/views/order.html',
            controller: 'HomeController'
        })
        .state('appetizers', {
            url: '/appetizers',
            templateUrl: '/views/appetizers.html',
            controller: 'HomeController'
        })
        .state('chickenandfish', {
            url: '/chickenandfish',
            templateUrl: '/views/chickenandfish.html',
            controller: 'HomeController'
        })
        .state('shrimps', {
            url: '/shrimps',
            templateUrl: '/views/shrimps.html',
            controller: 'HomeController'
        })
        .state('fromthegrill', {
            url: '/fromthegrill',
            templateUrl: '/views/fromthegrill.html',
            controller: 'HomeController'
        })
        .state('internationals', {
            url: '/internationals',
            templateUrl: '/views/internationals.html',
            controller: 'HomeController'
        })
        .state('drinks', {
            url: '/drinks',
            templateUrl: '/views/drinks.html',
            controller: 'HomeController'
        });
}])
