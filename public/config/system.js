define(function(require) {
    var angular = require('angular');
    return function(app) {
        app.config(
            ['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
                function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
                    app.controller = $controllerProvider.register;
                    app.directive  = $compileProvider.directive;
                    app.filter     = $filterProvider.register;
                    app.factory    = $provide.factory;
                    app.service    = $provide.service;
                    app.constant   = $provide.constant;
                    app.value      = $provide.value;
                }
            ])
            .config(['$translateProvider', function($translateProvider){
                $translateProvider.useStaticFilesLoader({
                    prefix: 'app/l10n/',
                    suffix: '.json'
                });
                $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
                $translateProvider.preferredLanguage('ru');
                $translateProvider.useLocalStorage();

            }])
            .config(['tmhDynamicLocaleProvider', function(tmhDynamicLocaleProvider) {
                tmhDynamicLocaleProvider.localeLocationPattern("/vendor/angular-i18n/angular-locale_{{locale}}.js");
            }])
        ;
    }
});