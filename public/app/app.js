define(function(require) {
    'use strict';

    require('modules/application/includes');
    require('modules/watcher/includes');

    // App-wide controller
    require('modules/application/controllers/main');

    var angular = require('angular');
    require('angular-cookies');
    require('angular-resource');
    require('angular-storage');
    require('angular-ui-router');
    require('angular-translate');
    require('angular-translate-static-loader');
    require('angular-translate-local-storage');
    require('angular-translate-cookie-storage');
    require('angular-translate-interpolation-messageformat');
    require('angular-dynamic-locale');
    require('angular-animate');
    require('angular-aria');
    require('ngMaterial');

    var name = 'lostwatcher';
    var app = angular.module(name, [
        'ngAria',
        'ngResource',
        'ngCookies',
        'ngStorage',
        'ui.router',
        'pascalprecht.translate',
        'tmh.dynamicLocale',
        'ngAnimate',
        'ngMaterial',

        'application',
        'watcher'
    ]);

    app.run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.appConfig = require('../config/application');
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    );

    require('../config/system')(app);
});