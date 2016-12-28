(function () {
    /* From http://stackoverflow.com/questions/14809686/showing-alert-in-angularjs-when-user-leaves-a-page
     * Add this to a form to stop the window changing when data has changed ie
     * <form dirty-tracking dirty-message="Close this??">
     * the dirty-message will be shown if the form is dirty and needs to be saved otherwise the message
     * is 'You have unsaved changes. Are you sure you want to leave this page?'
     */
    angular
        .module('app.widgets')
        .directive('showErrors', showErrors);

    function showErrors() {
        return {
            restrict: 'A',
            replace: false,
            scope: {
                showErrors: "@",
                item: "="
            },
            template: "<span class=\"help-block text-error\" ng-repeat=\"msg in item._errors[showErrors]\">{{msg}}<br /></span>"
        };
    }
})();
