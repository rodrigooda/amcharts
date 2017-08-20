(function () {
    'use strict';
    angular.module("app").directive('amChart', amChart);
    amChart.$inject = ['$rootScope'];
    function amChart($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                options: '=',
                data: '=',
                height: '@',
                width: '@',
                id: '@'
            },
            template: '<div class="amchart"></div>',
            link: function ($scope, $el) {
                var id = $scope.id;
                $el.attr('id', id);
                var height = $scope.height || '100%';
                var width = $scope.width || '100%';
                var addword = id + " > div > div >a";
                $el.css({
                    'height': height,
                    'width': width
                });
                $scope.options.listeners = [{
                    "event": "clickGraphItem",
                    "method": function (event) {
                        $rootScope.$broadcast("clickChartItem", event.item.category);
                    }
                }];
                $scope.options.dataProvider = $scope.data;
                var chart = AmCharts.makeChart(id, $scope.options);
            }
        }
    }
    /*
    angular.module("app").directive('amChart', ['$q', '$rootScope', function ($q, $rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                options: '=',
                data: '=',
                height: '@',
                width: '@',
                id: '@'
            },
            template: '<div class="amchart"></div>',
            link: function ($scope, $el) {
                var id = $scope.id;
                $el.attr('id', id);
                var height = $scope.height || '100%';
                var width = $scope.width || '100%';
                var addword = id + " > div > div >a";
                $el.css({
                    'height': height,
                    'width': width
                });
                $scope.options.listeners = [{
                    "event": "clickGraphItem",
                    "method": function (event) {
                        console.log("clickChartItem");
                        $rootScope.$broadcast("clickChartItem", event.item.category);
                    }
                }];
                $scope.options.dataProvider = $scope.data;
                var chart = AmCharts.makeChart(id, $scope.options);
            }
        }
    }]);
    */
})();