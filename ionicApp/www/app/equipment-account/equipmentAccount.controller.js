(function () {
    angular
        .module('app.equipment-account')
        .controller('equipmentAccountController', equipmentAccountController);

    /* @ngAnnotate */
    function equipmentAccountController($state, $stateParams, $scope, $rootScope, alerts, dataService, SweetAlert) {
    	alerts.clearMessages();

        $scope.validateItem = validateItem;
        $scope.modelName = 'equipment-account';
        $scope.api = dataService.getApi('equipment-accounts');
        $scope.formState = {loaded: false, saving: false};

        loadItem();
        loadOptions();

        function loadItem() {

            $scope.item = {};
            $scope.formState.loaded = true;

            if ($state.params.id) {
                console.log('test');
                $scope.api.list({id: $state.params.id}, function (response) {
                    $scope.formState.loaded = false;
                    $scope.item = response;
                });
            }

        }

        function loadOptions() {
            dataService.getApi('equipment-types').query(function (response) {
                $scope.equipmentTypes = response;
            });
        }


        /* Override for default impls */
        function validateItem(item) {
            return true;
        }
    }

})();
