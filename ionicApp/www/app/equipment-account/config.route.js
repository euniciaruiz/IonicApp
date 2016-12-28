(function () {
    angular
        .module('app.equipment-account')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('equipment-account', {
                abstract: true,
                url: "/equipment-account",
                templateUrl: "app/layout/content.html"
            })
            .state('equipment-account.list', {
                url: "/list?offset&limit&ordering&sort&order&searchField&filter&q",
                templateUrl: "app/equipment-account/list.html",
                controller: "equipmentAccountListController",
                controllerAs: "vm"
            })
            .state('equipment-account.create', {
                url: "/create",
                templateUrl: "app/equipment-account/create.html",
                controller: "equipmentAccountController",
                controllerAs: "vm"
            })
            .state('equipment-account.edit', {
                url: "/:id/edit",
                templateUrl: "app/equipment-account/edit.html",
                controller: "equipmentAccountController",
            })
        }

})();
