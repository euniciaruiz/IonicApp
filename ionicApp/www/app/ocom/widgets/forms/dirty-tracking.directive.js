(function () {
    /* From http://stackoverflow.com/questions/14809686/showing-alert-in-angularjs-when-user-leaves-a-page
     * Add this to a form to stop the window changing when data has changed ie
     * <form dirty-tracking dirty-message="Close this??">
     * the dirty-message will be shown if the form is dirty and needs to be saved otherwise the message
     * is 'You have unsaved changes. Are you sure you want to leave this page?'
     */
    angular
        .module('app.widgets')
        .directive('dirtyTracking', dirtyTracking);

    function dirtyTracking() {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                function isDirty() {
                    var formObj = $scope[$element.attr('name')];
                    return formObj && formObj.$pristine === false;
                }

                function areYouSurePrompt() {
                    if (isDirty()) {
                        return $attrs.dirtyMessage || 'You have unsaved changes. Are you sure you want to leave this page?';
                    }
                }

                window.addEventListener('beforeunload', areYouSurePrompt);

                $element.bind("$destroy", function () {
                    window.removeEventListener('beforeunload', areYouSurePrompt);
                });

                $scope.$on('$stateChangeStart', function (event) {
                    //Angular UI-Router
                    var prompt = areYouSurePrompt();
                    if (!event.defaultPrevented && prompt && !confirm(prompt)) {
                        event.preventDefault();
                    }
                });
                $scope.$on('$locationChangeStart', function (event) {
                    var prompt = areYouSurePrompt();
                    if (!event.defaultPrevented && prompt && !confirm(prompt)) {
                        event.preventDefault();
                    }
                });
            }
        };
    }

})();
