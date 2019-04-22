(function(){
    angular.
    module('phonecatApp')
    .controller('ScopeController',ScopeController)
    .controller('ScopeController2',ScopeController2)
    .controller('ListCtrl',ListCtrl)
    .controller('EventController',EventController)
    .controller('FilterController',FilterController)
    .filter('revert', reverse)
    .controller('MyController',MyController)
    .controller('FormController',FormController)
    

    ScopeController.$inject = ['$scope', '$state'];
    function ScopeController($scope, $state) {
        $scope.username = '';
        $scope.sayHello = function(){
            $scope.greeting = 'Hello ' + $scope.username + '!';
        }
    }

    ScopeController2.$inject = ['$scope', '$state','$rootScope'];
    function ScopeController2($scope, $state,$rootScope) {
        $scope.name = 'World';
        $rootScope.department = 'Angular';
    }


       
    function ListCtrl($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
    }

    function EventController($scope){
        $scope.count = 0;
        $scope.$on('MyEvent', function() {
            $scope.count++;
        });
    }

    FilterController.$inject = ['$scope','filterFilter']
    function FilterController($scope,filterFilter) {
        // this 指向controller 实例
        $scope.array = [
          {name: 'asnowwolf'},
          {name: 'why520crazy'},
          {name: 'joe'},
          {name: 'ckken'},
          {name: 'lightma'},
          {name: 'FrankyYang'}
        ];
        $scope.filteredArray = filterFilter($scope.array, 'a');
      }


      // 注册过滤器
       function reverse() {
        return function(input, uppercase) {
          input = input || '';
          var out = '';
          for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
          }
          // conditional based on optional argument
          if (uppercase) {
            out = out.toUpperCase();
          }
          return out;
        };
      }
      MyController.$inject = ['$scope', 'revertFilter']
      function MyController($scope, revertFilter) {
        $scope.greeting = 'hello';
        $scope.filteredGreeting = revertFilter($scope.greeting);
      }



      // 指令
      function FormController($scope) {
        $scope.master = {};
       
        $scope.update = function(user) {
          $scope.master = angular.copy(user);
        };
       
        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };
       
        $scope.isUnchanged = function(user) {
            return angular.equals(user, $scope.master);
          };
         
        $scope.reset();
      }
})()