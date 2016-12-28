(function () {
    angular
        .module('app.widgets')
        .directive('sortable', sortable);

    function sortable() {
        return {
            restrict: 'AE',
            replace: false,
            scope: {
                listOptions: '=ngModel',
                changed: '&changed'
            },
            transclude: true,
            // require: '^ngModel',
            templateUrl: 'app/ocom/widgets/lists/sortable.directive.html',
            link: function (scope, elem, attrs, ngModel) {

                var sortField = "";
                if (scope.listOptions) {
                    sortField = scope.listOptions.sort;
                }
                scope.currentAsc = (sortField == attrs.sortable && scope.listOptions.order == 'asc');
                scope.currentDesc = (sortField == attrs.sortable && scope.listOptions.order == 'desc');

                elem.bind('click', function () {
                    scope.$apply(function () {
                        if (scope.listOptions.sort == attrs.sortable) {
                            if (scope.listOptions.order == "asc"){
                                scope.listOptions.order = "desc";
                            }
                            else{
                                scope.listOptions.order = "asc";
                            }
                        }
                        else {
                            scope.listOptions.sort = attrs.sortable;
                            scope.listOptions.order = "asc";
                        }
                    });
                    scope.changed();
                });
            }
        };
    }

})();
