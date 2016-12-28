(function () {
    angular
        .module('app.widgets')
        .directive('ocomDatetimePicker', ocomDatetimePicker);

    function ocomDatetimePicker($parse) {
        return {
            restrict: 'EA',
            templateUrl: "app/ocom/widgets/dates/ocom-datetime-picker.html",
            scope: {
                model: '=',
                // Optional: Only used in shifts - for determining if the widget should be disabled.
                item: '=',
                placeholder: '@'
            },

            controller: function ($scope) {
                $scope.setToday = function () {
                    $scope.model = new Date();
                };

                $scope.clearDate = function () {
                    $scope.model = null;
                };

            },

        };
    }

})();
