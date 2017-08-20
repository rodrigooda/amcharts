(function () {
    'use strict';
    angular.module("app").directive('modal', modal);
    modal.$inject = ['$rootScope'];
    function modal($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '@',
                contratos: '='
            },
            templateUrl: 'modal-type-1.html',
            link: function ($scope, $el) {
                $rootScope.$on("openModal", function (event, data) {
                    $scope.$apply(function () {
                        $scope.contratos = data;
                    });
                    $($el).modal('show');
                });
                $scope.closeModal = function () {
                    $($el).modal('hide');
                }
            }
        }
    }
    /*
    angular.module("app").directive('modal', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '@',
                contratos: '='
            },
            templateUrl: 'modal-type-1.html',
            link: function ($scope, $el) {
                $rootScope.$on("openModal", function (event, data) {
                    $scope.$apply(function () {
                        $scope.contratos = data;
                    });
                    $($el).modal('show');
                });
                $scope.closeModal = function () {
                    $($el).modal('hide');
                }
            }
        }
    }]);
    */
})();