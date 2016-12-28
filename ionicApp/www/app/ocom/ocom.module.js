(function () {
        angular
            .module('app.ocom', [
                    /*
                     * Angular modules
                     */
                    'ngSanitize', 'ngResource', 'ui.router', 'ngStorage',


                    /*
                     * Our reusable cross app code modules
                     */
                    // 'app.ocom.auth',

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
                    'mgcrea.ngStrap.datepicker'
            ]);

})();
