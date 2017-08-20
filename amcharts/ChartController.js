(function () {
    'use strict';
    angular.module("app").controller('ChartController', ChartController);
    ChartController.$inject = ['$scope'];
    function ChartController($scope) {
        var vm = this;

        vm.options = {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Contratos aprovados",
                "gridThickness": 0
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColors": "#2A0CD0",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "aprovados"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "mes",
            "categoryAxis": {
                "gridPosition": "start",
                "gridThickness": 0
            },
            "export": {
                "enabled": true
            }

        };
        vm.data = [{
            "mes": "Janeiro",
            "aprovados": 3025
        }, {
            "mes": "Fevereiro",
            "aprovados": 1882
        }, {
            "mes": "Março",
            "aprovados": 1809
        }];

        var contratos1 = [{
            "id": 1,
            "name": "Contrato 1",
            "aprovado": true
        }, {
            "id": 2,
            "name": "Contrato 2",
            "aprovado": false
        }, {
            "id": 3,
            "name": "Contrato 3",
            "aprovado": true
        }];
        var contratos2 = [{
            "id": 4,
            "name": "Contrato 4",
            "aprovado": true
        }, {
            "id": 5,
            "name": "Contrato 5",
            "aprovado": false
        }, {
            "id": 6,
            "name": "Contrato 6",
            "aprovado": true
        }];
        var contratos3 = [{
            "id": 7,
            "name": "Contrato 7",
            "aprovado": true
        }, {
            "id": 8,
            "name": "Contrato 8",
            "aprovado": false
        }, {
            "id": 9,
            "name": "Contrato 9",
            "aprovado": true
        }];



        $scope.$on("clickChartItem", function (event, data) {
            switch (data) {
                case "Janeiro":
                    $scope.$emit("openModal", contratos1);
                    break;
                case "Fevereiro":
                    $scope.$emit("openModal", contratos2);
                    break;
                case "Março":
                    $scope.$emit("openModal", contratos3);
                    break;
            }
        });

    }
    /*
        angular.module("app").controller('ChartController', ["$scope", function ($scope) {
            var vm = this;
    
            vm.options = {
                "type": "serial",
                "theme": "light",
                "marginRight": 70,
                "valueAxes": [{
                    "axisAlpha": 0,
                    "position": "left",
                    "title": "Contratos aprovados",
                    "gridThickness": 0
                }],
                "startDuration": 1,
                "graphs": [{
                    "balloonText": "<b>[[category]]: [[value]]</b>",
                    "fillColors": "#2A0CD0",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "valueField": "aprovados"
                }],
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": false
                },
                "categoryField": "mes",
                "categoryAxis": {
                    "gridPosition": "start",
                    "gridThickness": 0
                },
                "export": {
                    "enabled": true
                }
    
            };
            vm.data = [{
                "mes": "Janeiro",
                "aprovados": 3025
            }, {
                "mes": "Fevereiro",
                "aprovados": 1882
            }, {
                "mes": "Março",
                "aprovados": 1809
            }];
    
            var contratos1 = [{
                "id": 1,
                "name": "Contrato 1",
                "aprovado": true
            }, {
                "id": 2,
                "name": "Contrato 2",
                "aprovado": false
            }, {
                "id": 3,
                "name": "Contrato 3",
                "aprovado": true
            }];
            var contratos2 = [{
                "id": 4,
                "name": "Contrato 4",
                "aprovado": true
            }, {
                "id": 5,
                "name": "Contrato 5",
                "aprovado": false
            }, {
                "id": 6,
                "name": "Contrato 6",
                "aprovado": true
            }];
            var contratos3 = [{
                "id": 7,
                "name": "Contrato 7",
                "aprovado": true
            }, {
                "id": 8,
                "name": "Contrato 8",
                "aprovado": false
            }, {
                "id": 9,
                "name": "Contrato 9",
                "aprovado": true
            }];
    
    
    
            $scope.$on("clickChartItem", function (event, data) {
                switch (data) {
                    case "Janeiro":
                        $scope.$emit("openModal", contratos1);
                        break;
                    case "Fevereiro":
                        $scope.$emit("openModal", contratos2);
                        break;
                    case "Março":
                        $scope.$emit("openModal", contratos3);
                        break;
                }
            });
    
        }]);
        */
})();