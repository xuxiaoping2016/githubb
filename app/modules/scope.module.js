(function () {
    angular
        .module('phonecatApp')
        .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                events: true,
                modules: [
                    // 券订单
                    {
                        name: 'scopeModule',
                        files: [
                            'pages/scope.controller.js'
                        ]
                    }
                ]
            });
        }]);
})();
