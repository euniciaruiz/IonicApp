(function () {
    angular
        .module('app.dashboard')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: "",
                templateUrl: "app/layout/content.html"
            })
            .state('dashboard.dashboard', {
                url: "",
                templateUrl: "app/dashboard/dashboard.html",
                controller: "DashboardController",
                controllerAs: "vm"
            })
    }

})();
