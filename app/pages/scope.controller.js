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

        $scope.friends = [
          {name:'John', age:25, gender:'boy'},
          {name:'Jessie', age:30, gender:'girl'},
          {name:'Johanna', age:28, gender:'girl'},
          {name:'Joy', age:15, gender:'girl'},
          {name:'Mary', age:28, gender:'girl'},
          {name:'Peter', age:95, gender:'boy'},
          {name:'Sebastian', age:50, gender:'boy'},
          {name:'Erika', age:27, gender:'girl'},
          {name:'Patrick', age:40, gender:'boy'},
          {name:'Samantha', age:60, gender:'girl'}
        ];

        $scope.users = [
           {userID:1, username:"cat", nickname:"tom"},
           {userID:2, username:"xiaofan", nickname:"张小凡"},
           {userID:3, username:"biyao", nickname:"碧瑶"},
           {userID:4, username:"luxueqi", nickname:"陆雪琪"},
           {userID:5, username:"linjingyu", nickname:"林惊羽"},
           {userID:6, username:"cengshushu", nickname:"曾书书"},
           {userID:7, username:"zhuque", nickname:"朱雀"},
           {userID:8, username:"qinglong", nickname:"青龙"},
           {userID:9, username:"guiwang", nickname:"鬼王"},
           {userID:10, username:"dushen", nickname:"赌神"},
           {userID:11, username:"jinpiner", nickname:"金瓶儿"}
        ] 
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