(function () {
    'use strict';
    angular
        .module('app.equipment-type')
        .controller('equipmentTypeListController', equipmentTypeListController);

    function equipmentTypeListController($scope, $state, dataService, $localStorage) {

        var filters = [
            {'id': 'all', 'name': 'All'},
            {'id': 'active', 'name': 'Active'},
            {'id': 'inactive', 'name': 'Not Active'}
        ];

        var fields = [
            {'id': 'name', 'name': 'Name', 'type': 'text'}
        ];

        $scope.navMenu = '';
        $scope.modelName = 'equipment-type';
        $scope.listOptions = dataService.getListOptions();
        $scope.listLoaded = false;
        $scope.maxRanges = [10, 20, 50, 100];
        $scope.fields = fields;
        $scope.filters = filters;
        $scope.loadList = loadList;
        $scope.$storage = $localStorage;
        // console.log(loadList());
        loadList();

        function loadList() {
            dataService
                .getApi('equipment-types')
                .query($state.params, function (data) {
                    $scope.list = data;
                    $scope.listOptions.total = data.count;
                    $scope.listOptions.currentPage = Math.ceil($scope.listOptions.offset / $scope.listOptions.limit) + 1;
                    $scope.listLoaded = true;
                }); 

        }

        function syncData(){
            // for(var i=0; i < $localStorage.length; i++){
                
            //     var item = $localStorage[i];
            //     // dataService.getApi('equipment-types').save();
            //     console.log(item);
            // }
            console.log($localStorage.length);
        }

        
    }

})();
