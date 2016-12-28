

(function () {
    'use strict';

    angular
        .module('app.equipment-type')
        .controller('equipmentTypeController', equipmentTypeController);

    /* @ngAnnotate */
    function equipmentTypeController($state, $stateParams, $scope, $rootScope, alerts, dataService, SweetAlert) {
        alerts.clearMessages();

        $scope.validateItem = validateItem;
        $scope.modelName = 'equipment-type';
        $scope.api = dataService.getApi('equipment-types');
        $scope.formState = {loaded: false, saving: false};
        $scope.offlineApi = [];
        loadItem();


        function loadItem() {
            $scope.item = {};
            $scope.formState.loaded = true;
            if ($state.params.id) {
                $scope.api.list({id: $state.params.id}, function (response) {
                    $scope.formState.loaded = false;
                    $scope.item = response;
                });
            }

        }



        /* Override for default impls */
        function validateItem(item) {
            return true;
        }
    }
})();