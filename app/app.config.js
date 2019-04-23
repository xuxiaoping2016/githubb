'use strict';

// angular.
//   module('phonecatApp').
//   config(['$routeProvider',
//     function config($routeProvider) {
//       $routeProvider.
//         when('/phones', {
//           template: '<phone-list></phone-list>'
//         }).
//         when('/phones/:phoneId', {
//           template: '<phone-detail></phone-detail>'
//         }).
//         otherwise('/phones');
//     }
//   ]);

angular.
  module('phonecatApp').
  config(['$stateProvider',
    function config($stateProvider) {
        $stateProvider
        .state('parent', {
            abstract: true,
            url: '/',
            template: 'I am parent <div ui-view></div>'
        }).state('parent.child', {
            url: '',
            template: 'I am child'
        })
        .state('home', {
            abstract: true,
            url: '/home',
            template: 'I am home <div ui-view></div>'
        }).state('home.child', {
            abstract: true,
            url: '',
            template: 'I am home child <div ui-view></div>'
        })
    }
  ]);


//   .state('home.child.scope', {
//     url: '/scope',
//     template: '路由'
// });
