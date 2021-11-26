angular.module('app', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/career", {
            controller: "CareerCtrl",
            templateUrl: "fragements/career.html"
        })
            .when("/contact", {
                controller: "ContactCtrl",
                templateUrl: "fragements/contact.html"
            })
            .when("/home", {
                controller: "HomeCtrl",
                templateUrl: "fragements/home.html"
            })
            .when("/", {
                controller: "HomeCtrl",
                templateUrl: "fragements/home.html"
            })
    })
