(function () {
    angular
        .module('app.rule')
        .controller('ruleController', ruleController);

    /* @ngAnnotate */
    function ruleController($state, $stateParams, $scope, $rootScope, alerts, dataService, SweetAlert) {
    	alerts.clearMessages();

        $scope.validateItem = validateItem;
        $scope.modelName = 'rule';
        $scope.api = dataService.getApi('rules');
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

        	$scope.options = {};
            dataService.getApi('accounts').query(function (response) {
                $scope.options.accounts = response;
            });
            dataService.getApi('equipment-accounts').query(function (response) {
                $scope.options.equipmentAccounts = response;
            });
            dataService.getApi('equipment-types').query(function (response) {
                $scope.options.equipmentTypes = response;
                console.log("Equipment types: " + response);

            });
        }


        /* Override for default impls */
        function validateItem(item) {
            return true;
        }
    }

})();
