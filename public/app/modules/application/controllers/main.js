define(function (require) {

    var angular = require('angular');
    var module = require('module!@');

    module.controller('application.controllers.main', [
        '$rootScope', '$scope', '$translate', '$localStorage', '$window', 'tmhDynamicLocale',
        function ($rootScope, $scope, $translate, $localStorage, $window, tmhDynamicLocale) {
            $scope.app = {
            };

            tmhDynamicLocale.set("ru");

            if ( angular.isDefined($localStorage.settings) ) {
                $scope.app = $localStorage.settings;
            } else {
                $localStorage.settings = $scope.app;
            }
            $scope.$watch('app', function(){
                $localStorage.settings = $scope.app;
            }, true);
        }
    ]);
});