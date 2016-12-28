(function () {
    angular
        .module('app.widgets')
        .directive('listAppend', listAppend);

    function listAppend() {
        return {
            restrict: 'A',
            scope: {
                list: '=', // The List/Array to append to
                item: '@', // The item to add ie {} or {value:0'}
                listIndex: '=' // The Index to append at, so put 0 to put at start of list..
            },
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    var theList = scope.list;

                    if (angular.isUndefined(theList)) {
                        scope.list = [];
                        theList = scope.list;
                    }

                    var newItem = angular.copy(scope.$eval(scope.item));
                    if (newItem !== null)
                        scope.$apply(function () {
                            if (angular.isDefined(scope.insertIndex))
                                theList.splice(scope.insertIndex, 0, newItem);
                            else
                                theList.push(newItem);
                        });
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
