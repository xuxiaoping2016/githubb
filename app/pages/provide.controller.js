(function(){
    angular.
    module('phonecatApp')
    .controller('ProvideController',ProvideController)


    ProvideController.$inject =[ 'clientId','unicornLauncher', '$scope'];
    function ProvideController(clientId,unicornLauncher, $scope){
        console.log(unicornLauncher,unicornLauncher)
        $scope.clientId = clientId;
        $scope.unicornLauncher = unicornLauncher;
    }

})()