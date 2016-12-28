(function () {
    angular
        .module('app.account')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                url: "/account",
                templateUrl: "app/layout/content.html"
            })
            .state('account.list', {
                url: "/list?offset&limit&ordering&sort&order&searchField&filter&q",
                templateUrl: "app/account/list.html",
                controller: "accountListController",
            })
            .state('account.create', {
                url: "/create",
                templateUrl: "app/account/create.html",
                controller: "accountController",
            })
            .state('account.edit', {
                url: "/:id/edit",
                templateUrl: "app/account/edit.html",
                controller: "accountController",
            })
    }

})();
