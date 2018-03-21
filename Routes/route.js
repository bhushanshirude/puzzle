var app = angular.module("myApp", ["ui.router", "myCtrl"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("card", {
            url: "/card",
            templateUrl: "card.html",
            controller: "cardCtrl"
        })
    $urlRouterProvider.otherwise("card")
})