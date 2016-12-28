(function(){
    angular
        .module('app.widgets')
        .directive('listRemove', listRemove);

    function listRemove() {
        return {
            restrict: 'A',
            scope: {
                list: '=', // The List/Array to append to
                item: '=', // The Item in the array to Remove
                listIndex: '=' // The Index of the Item to remove.
            },
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    var list = scope.list;

                    var index = findIndex(scope.listIndex, list, scope.item);
                    if (index > -1) {
                        scope.$apply(function () {
                            list.splice(index, 1);
                        });
                    }
                    return false;
                });
            }
        };
    }

    function findIndex(listIndex, list, item) {
        if (angular.isDefined(listIndex)) {
            return listIndex;
        }

        return list.indexOf(item);
    }
})();
