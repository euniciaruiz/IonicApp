(function () {
    angular
        .module('app.widgets')
        .directive('listMoveDown', listMoveDown);

    function listMoveDown() {
        return {
            restrict: 'A',
            scope: {
                list: '=', // The List/Array to Move Down
                item: '=', // The Item in the array to Move Down
                listIndex: '=' // The Index of the Item to Move Down.
            },
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    var list = scope.list;

                    var index = findIndex(scope.listIndex, list, scope.item);
                    if (index < list.length - 1) {
                        scope.$apply(function () {
                            var original = list[index + 1];
                            list[index + 1] = list[index];
                            list[index] = original;
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
