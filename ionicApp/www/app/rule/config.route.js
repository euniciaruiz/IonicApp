(function () {
    angular
        .module('app.rule')
        .config(routeConfig);

    /* @ngAnnotate */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('rule', {
                abstract: true,
                url: "/rule",
                templateUrl: "app/layout/content.html"
            })
            .state('rule.list', {
                url: "/list?offset&limit&ordering&sort&order&searchField&filter&q",
                templateUrl: "app/rule/list.html",
                controller: "ruleListController",
                controllerAs: "vm"
            })
            .state('rule.create', {
                url: "/create",
                templateUrl: "app/rule/create.html",
                controller: "ruleController",
                controllerAs: "vm"
            })
            .state('rule.edit', {
                url: "/:id/edit",
                templateUrl: "app/rule/edit.html",
                controller: "ruleController",
            })
    }

})();
