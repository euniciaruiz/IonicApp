(function () {
    'use strict';
    angular
        .module('app.equipment-type')
        .controller('equipmentTypeSyncController', equipmentTypeSyncController);

    function equipmentTypeSyncController($scope) {

        syncData();

        function syncData() {
           console.log("synchronizing...");
        }

        
    }

})();
