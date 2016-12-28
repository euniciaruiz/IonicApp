(function () {
    angular
        .module('app.ocom')
        .controller('FooterController', FooterController);


    function FooterController($scope, $http, releaseService) {
        var vm = this;

        releaseService.getReleaseVersion().then(function (data) {
            vm.release = data;
        });

    }

})();