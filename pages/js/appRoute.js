angular.module('app.routingScripts', ['ui.router', 'ngDialog'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('/', {
                url: "/",
                templateUrl: "partials/requestForm.html"
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('login', {
                onEnter: function ($stateParams, $rootScope, $state, ngDialog) {
                    ngDialog.open({
                        className: 'ngdialog-theme-default',
                        template: "partials/login.html",
                        showClose: true,
                        closeByEscape: true
                    });
                }
            })

            .
            state('state2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });

        $locationProvider.html5Mode(true);
    });
