(function(){
    angular.
    module('phonecatApp').controller('ScopeController',ScopeController)


    ScopeController.$inject = ['$scope', '$state'];
    function ScopeController($scope, $state) {
        $scope.username = '';
        $scope.sayHello = function(){
            console.log(`你好，${$scope.username}`)
        }
    }
})()