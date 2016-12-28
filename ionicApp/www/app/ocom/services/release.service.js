(function () {
    angular
        .module('app.ocom')
        .factory('releaseService', releaseService);


    function releaseService($http) {
        return {
            getReleaseVersion: function () {
                return $http.get('/release/').then(function (response) {
                    return response.data.release;
                });
            }
        }
    }


})();