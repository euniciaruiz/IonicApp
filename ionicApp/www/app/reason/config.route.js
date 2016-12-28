(function () {
    angular
        .module('app.reason')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('reason', {
                abstract: true,
                url: "/reason",
                templateUrl: "app/layout/content.html"
            })
            .state('reason.list', {
                url: "/list",
                templateUrl: "app/reason/list.html",
                controller: "listController",
                controllerAs: "vm"
            })
            .state('reason.create', {
                url: "/create",
                templateUrl: "app/reason/create.html",
                controller: "createController",
                controllerAs: "vm"
            })
            .state('reason.edit', {
                url: "/:id/edit",
                templateUrl: "app/reason/edit.html",
                // controller: "editController",
            })
    }

})();
