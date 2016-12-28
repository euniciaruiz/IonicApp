(function () {
    angular
        .module('app.equipment-type')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('equipment-type', {
                abstract: true,
                url: "/equipment-type",
                templateUrl: "app/layout/content.html",
            })
            .state('equipment-type.list', {
                url: "/list?offset&limit&ordering&sort&order&searchField&filter&q",
                templateUrl: "app/equipment-type/list.html",
                controller: "equipmentTypeListController",
            })
            .state('equipment-type.create', {
                url: "/create",
                templateUrl: "app/equipment-type/create.html",
                controller: "equipmentTypeController",
            })
            .state('equipment-type.edit', {
                url: "/:id/edit",
                templateUrl: "app/equipment-type/edit.html",
                controller: "equipmentTypeController",
            })
            .state('equipment-type.sync', {
                url: "/sync",
                templateUrl: "app/equipment-type/sync.html",
                controller: "equipmentTypeSyncController",
            })

    }

})();
