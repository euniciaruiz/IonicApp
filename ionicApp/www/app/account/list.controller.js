(function () {
    angular
        .module('app.account')
        .controller('accountListController', accountListController);

    function accountListController($scope, $state, dataService) {

        var filters = [
            {'id': 'all', 'name': 'All'},
            {'id': 'active', 'name': 'Active'},
            {'id': 'inactive', 'name': 'Not Active'}
        ];

        var fields = [
            {'id': 'name', 'name': 'Name', 'type': 'text'}
        ];

        $scope.navMenu = '';
        $scope.modelName = 'account';
        $scope.listOptions = dataService.getListOptions();
        $scope.listLoaded = false;
        $scope.maxRanges = [10, 20, 50, 100];
        $scope.fields = fields;
        $scope.filters = filters;
        $scope.loadList = loadList;

        loadList();

        function loadList() {
            dataService
                .getApi('accounts')
                .query($state.params, function (data) {
                    $scope.list = data;
                    $scope.listOptions.total = data.count;
                    $scope.listOptions.currentPage = Math.ceil($scope.listOptions.offset / $scope.listOptions.limit) + 1;
                    $scope.listLoaded = true;
                });
        }
    }

})();
