/*
 * Needs the following scope variables to be defined in the main controller:
 * - modelName
 * - form
 * - formState
 * - api - derived from dataService.getApi
 * - item
 * */
(function () {
    angular
        .module('app.widgets')
        .directive('ocomSynch', function () {
            return {
                restrict: 'EA',
                transclude: true,
                templateUrl: 'app/ocom/widgets/ocom-synch.html',
                controller: function ($scope, $state, alerts, $localStorage, $rootScope, $window) {
                    $scope.checkNetwork = checkNetwork;
                    $scope.synchData = synchData;
                    $scope.loadData = loadData;
                    $scope.$storage = $localStorage;
                    console.log($scope.offlineApi);
                    function checkNetwork(){
                        $rootScope.online = navigator.onLine;
                        $window.addEventListener("offline", function(){
                            $rootScope.$apply(function(){
                                $rootScope.online = false;
                            });
                        }, false);

                        $window.addEventListener("online", function(){
                            $rootScope.$apply(function(){
                                $rootScope.online = true;
                            });
                        }, false);

                        return $rootScope.online;
                    }

                    function loadData(){
                        var online = checkNetwork();

                        if(online){
                            var items = angular.copy($scope.list);
                            $scope.$storage = items;
                            console.log(items);
                        }else{
                            alert("Sorry. You are currently offline.");
                        }
                        
                    }

                    function synchData(){
                        var online = checkNetwork();
                        if(online){
                            console.log($scope.$storage.length);
                        }
                    }

                    
                    
                }
            }
        });
})();
