; (function () {
    angular.module('phonecatApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $stateProvider
                // 三级券订单菜单路由
                .state('home.child.scope', {
                    url: '/scope',
                    controller: 'ScopeController',
                    templateUrl: '/pages/scope.html',
                })
                .state('home.child.scope1', {
                    url: '/scope1',
                    views: {
                        "": {
                            controller: 'ScopeController2',
                            templateUrl: '/pages/scope1.html',
                        }
                    },
                })
                .state('home.child.scope2', {
                    url: '/scope2',
                    views: {
                        "": {
                            controller: 'EventController',
                            templateUrl: '/pages/scope2.html',
                        }
                    },
                })
                .state('home.child.scope3', {
                    url: '/scope3',
                    views: {
                        "": {
                            controller: 'FilterController',
                            templateUrl: '/pages/scope3.html',
                        }
                    },
                })
                .state('home.child.filter', {
                    url: '/filter',
                    views: {
                        "@home.child": {
                            // controller: 'FilterController',
                            templateUrl: '/pages/filter.html',
                        }
                    },
                })
                .state('home.child.form', {
                    url: '/form',
                    views: {
                        "@home.child": {
                            controller: 'FormController',
                            templateUrl: '/pages/form.html',
                        }
                    },
                })
                .state('home.child.form2', {
                    url: '/form2',
                    views: {
                        "@home.child": {
                            controller: 'FormController',
                            templateUrl: '/pages/form2.html',
                        }
                    },
                })
                .state('home.child.provide', {
                    url: '/provide',
                    controller: 'ProvideController',
                    templateUrl: '/pages/provide.html',
                })
        });
})();
