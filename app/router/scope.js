; (function () {
    angular.module('phonecatApp')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $stateProvider
                // 三级券订单菜单路由
                .state('home.child.scope', {
                    url: '/scope',
                    // template:"三级路由"
                    views: {
                        "@home.child": {
                            controller: 'ScopeController',
                            templateUrl: '/pages/scope.html',
                        }
                    },
                    // resolve: ['$ocLazyLoad', function($ocLazyLoad) {
                    //     return $ocLazyLoad.load('scopeModule'); // 按需加载目标 js file
                    // }]
                    // resolve: {
                    //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //         return $ocLazyLoad.load([
                    //             'couponOrderModule',
                    //         ]).then(function () {
                    //         });
                    //     }]
                    // }
                })
        });
})();
