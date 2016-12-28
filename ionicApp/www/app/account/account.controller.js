(function () {
    'use strict';

    angular
        .module('app.account')
        .controller('accountController', accountController);

    function accountController($state, $stateParams, $scope, $rootScope, alerts, dataService, SweetAlert) {
    	alerts.clearMessages();

        $scope.validateItem = validateItem;
        $scope.modelName = 'account';
        $scope.api = dataService.getApi('accounts');
        $scope.formState = {loaded: false, saving: false};

        loadItem();
        loadOptions();

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

        function loadOptions() {
            dataService.getApi('equipment-accounts').query(function (response) {
                $scope.equipmentAccounts = response;
            });
        }


        /* Override for default impls */
        function validateItem(item) {
            return true;
        }
    }

})();
