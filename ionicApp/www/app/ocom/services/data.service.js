(function () {
    angular
        .module('app.data', [])
        .factory('dataService', dataService);


    dataService.$inject = ['$state', '$stateParams', '$resource'];
    function dataService($state, $stateParams, $resource) {

        return {
            getApi: getApi,
            getShiftSelectOptions: getShiftSelectOptions,
            getListOptions: getListOptions
        };

        function getShiftSelectOptions(){
            return {

            }
        }

        function getApi(model) {
            
            return $resource('http://localhost:8000/' + model + '/:id/', {id: '@id'}, {
                'list': {method: 'GET'},
                'update': {method: 'PUT'},
                'query': {method: 'GET', isArray: true},
                'save': {method: 'POST'}
            });
            console.log(ApiEndpoint.url);
        }

        function getListOptions() {
            return {
                total: 0,
                currentPage: 1,
                filter: $state.params.filter || "",
                sort: $state.params.sort || "",
                order: $state.params.order || "asc",
                q: $state.params.q || "",
                searchField: $state.params.searchField || "",
                ordering: $state.params.ordering || "",
                limit: parseInt($state.params.limit) || 10,
                offset: parseInt($state.params.offset) || 0
            }
        }

    }

})();
