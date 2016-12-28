(function () {
    angular
        .module('app', [
            /*
             * Angular modules
             */
            'ngSanitize', 'ngResource', 'ui.router', 'ngStorage',

            /*
             * Custom Modules
             * */
            'app.ocom',
            'app.dashboard',
            'app.account',
            'app.equipment-type',
            'app.equipment-account',
            'app.rule',
            'app.reason',

            'app.data',
            'app.widgets',

            /*
             * 3rd Party modules
             */
            'ui.bootstrap',
            'ui.bootstrap.tpls',
            'mgcrea.ngStrap',
            'angular-growl',
            'oitozero.ngSweetAlert',
            'angular-loading-bar',
            'xml',
            'mgcrea.ngStrap.timepicker',
            'mgcrea.ngStrap.datepicker',
            'ngFileUpload',
            'ngTable',
            'ngMask',
            'angularMoment'
        ]);


})();
