/*
 * Needs the following scope variables to be defined in the main controller:
 * - modelName
 * - form
 * - formState
 * - api - derived from dataService.getApi
 * - item
 * */
(function () {
    var offlineApi = [];
    angular
        .module('app.widgets')
        .directive('ocomCreate', function () {
            return {
                restrict: 'EA',
                transclude: true,
                templateUrl: 'app/ocom/widgets/ocom-create.html',
                controller: function ($scope, $state, alerts, $localStorage, $rootScope, $window) {
                    console.log($localStorage.length)
                    function saveErrorCallback(response) {
                        $scope.formState.saving = false;
                        alerts.error('Something went wrong. Please try again.', true);
                    }

                    $scope.doSave = function (item, success) {

                        $scope.formState.saving = true;
                        alerts.clearMessages();
                        var online = checkNetwork();
                        if(online){
                            if ($scope.validateItem(item)) {
                                var obj = new $scope.api(item);
                                obj.$save(function (response) {
                                    $scope.formState.saving = false;
                                    $scope.item = {};
                                    alerts.success(response.id + ' created.', true);
                                    success();
                                }, saveErrorCallback);
                            }else {
                                alerts.showNow();
                                $scope.formState.saving = false;
                            }
                        }else{
                            if($scope.validateItem(item)){
                                offlineApi.push(item);
                                $scope.offlineApi = offlineApi;
                                console.log($scope.offlineApi);
                            }
                        }

                    };

                    $scope.create = function (item) {
                        $scope.doSave(item, function () {
                            $scope.form.$setPristine();
                            $state.go($scope.modelName + '.create');
                        });  
                    };

                    $scope.createAndClose = function (item) {
                        $scope.doSave(item, function () {
                            $scope.form.$setPristine();
                            $scope.close();
                        });
                    };

                    $scope.createAndNew = function (item) {
                        $scope.doSave(item, function () {
                            $scope.form.$setPristine();
                            $state.go($scope.modelName + '.create');
                        });
                    };

                    $scope.close = function (item) {
                        $state.go($scope.modelName + '.list', {limit: 10, offset: 0});
                    };

                    //TODO: REFACTOR!
                    $scope.toggleLock = toggleLock;

                    function toggleLock() {
                        if (!$scope.item.locked) {
                            $scope.item.locked = true;
                            $scope.create($scope.item);
                        } else {
                            $scope.item.locked = !$scope.item.locked;
                        }

                    }
                }
            }
        });
})();
