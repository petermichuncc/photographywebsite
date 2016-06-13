// script.js

    
        // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/start.html',
                controller  : 'startController'
            })
			.when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'startController'
            })
            // route for the about page
            .when('/pricing', {
                templateUrl : 'pages/pricing.html',
                controller  : 'pricingController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            .when('/test', {
                templateUrl : 'pages/test.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        //$scope.message = '';
    });
     myApp.controller('startController', function($scope) {
        // create a message to display in our view
        //$scope.message = '';
        $scope.display = function() {
  
        $scope.alertDisplayed = true;
      $timeout(function() {
        $scope.alertDisplayed = false;
      }, 5000)
    };
    
    $scope.alertDisplayed = false;
    });

    myApp.controller('pricingController', function($scope) {
       // $scope.message = '';
    });

   myApp.controller('contactController', function($scope) {
       $scope.initSlider = function () {
          $(function () {
            // wait till load event fires so all resources are available
               $(".toggle-footer").click(function(){
        $("#footer-content").slideToggle("medium");
    });
          });
      }

       $scope.initSlider();


    });