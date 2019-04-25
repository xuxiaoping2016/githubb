/*
 * @Author: Jerry.tao
 * @Date: 2017-08-18 11:30:10
 * 用法：
 * <div select-filter="cardName"  select-item="select" list-data="data" on-select-confirm="confirm()" ></div>
 */

;
;(function() {
    angular.module('ngSaas').directive('selectFilter', ['$rootScope', '$timeout',
        function($rootScope, $timeout) {
            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    listData:"=", //列表数据
                    selectItem:"=", //选中的list
                    disabled: "=?",
                    onSelectConfirm:'&', //选中回调函数
                    onSelectChange:'&?', //选中变动后回调函数
                    clickCallback: '&?',
                    isScroll: '@?'
                },
                controller: "",
                templateUrl: "/module/components/select-filter/select.tpl.html",
                link: function(scope, element, attrs) {
                    scope.keyName = attrs.selectFilter;
                    scope.selectConfirm = function(data){
                        scope.selectItem = data;
                        $timeout(function() {
                        scope.onSelectConfirm();
                        scope.onSelectChange({selectItem: scope.selectItem});
                        }, 0)
                    }
                }
            };
        }
    ]);
})();
