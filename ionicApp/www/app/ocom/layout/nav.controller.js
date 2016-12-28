(function () {
    angular
        .module('app.ocom')
        .controller('NavController', NavController);


    function NavController($scope, $localStorage, $state, $location, authService, authManager) {
        var vm = this;
        vm.navMenu = null;
        vm.$storage = $localStorage;
        vm.logoutUser = function () {
            authService.unauthenticate();
            authManager.unauthenticate();
        };
        ////////////////
        getMenu();

        function getMenu() {
            alert('get Menu');
            var navMenuChoices = {
                'account':[
                    {
                        'link': "account.list({limit: 10, offset: 0, q: today})",
                        'name': 'Account List',
                        'stateName': 'account.list'
                    },
                    {'link': 'account.create', 'name': 'New Account', 'stateName': 'account.create'}
                ],
            };
            var currentModel = $state.current.name.split('.')[0];
            vm.navMenu = navMenuChoices[currentModel];
        }


    }


})();