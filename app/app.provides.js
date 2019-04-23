;(function(){
    angular.module('phonecatApp')
    .value({'clientId':'a12345654321x'})
    .factory('apiToken', ['clientId', function apiTokenFactory(clientId) {
        var encrypt = function(data1, data2) {
          // NSA-proof加密算法：
          return (data1 + ':' + data2).toUpperCase();
        };
      
        var secret = window.localStorage.getItem('myApp.secret') || 'xuxiaoping';
        var apiToken = encrypt(clientId, secret);
      
        return apiToken;
    }])
    .service('unicornLauncher', ["apiToken", UnicornLauncher])




    function UnicornLauncher(apiToken) {

        this.launchedCount = 0;
        this.launch = function() {
          // 带上apiToken来发起远程调用
        //   this.apiToken = apiToken;
          this.launchedCount++;
        }
      }
})();