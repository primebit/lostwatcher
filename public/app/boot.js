requirejs.config({
    waitSeconds: 60,
    baseUrl: 'app',
    paths: {
        'angular': '../vendor/angular/angular',
        'text': '../vendor/requirejs-text/text',
        'base': '../vendor/requirejs-angular-loader/src/base',
        'template': '../vendor/requirejs-angular-loader/src/template',
        'controller': '../vendor/requirejs-angular-loader/src/controller',
        'service': '../vendor/requirejs-angular-loader/src/service',
        'module': '../vendor/requirejs-angular-loader/src/module',
        'config': '../vendor/requirejs-angular-loader/src/config',
        'directive': '../vendor/requirejs-angular-loader/src/directive',
        'filter': '../vendor/requirejs-angular-loader/src/filter',

        // Extra bundles
        'messageformat': '../vendor/messageformat/messageformat',
        'angular-resource': '../vendor/angular-resource/angular-resource',
        'angular-storage': '../vendor/ngstorage/ngStorage',
        'angular-cookies': '../vendor/angular-cookies/angular-cookies',
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'angular-aria': '../vendor/angular-aria/angular-aria',
        'ngMaterial': '../vendor/angular-material/angular-material',
        'angular-translate': '../vendor/angular-translate/angular-translate',
        'angular-translate-static-loader': '../vendor/angular-translate-loader-static-files/angular-translate-loader-static-files',
        'angular-translate-local-storage': '../vendor/angular-translate-storage-local/angular-translate-storage-local',
        'angular-translate-cookie-storage': '../vendor/angular-translate-storage-cookie/angular-translate-storage-cookie',
        'angular-translate-interpolation-messageformat': '../vendor/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat',
        'angular-i18n-ru': '../vendor/angular-i18n/angular-locale_ru-ru',
        'angular-dynamic-locale': '../vendor/angular-dynamic-locale/tmhDynamicLocale.min',
        'angular-animate': '../vendor/angular-animate/angular-animate',
    },
    structure: {
        prefix: 'modules/{module}',
        module: {
            path: '/{module}'
        },
        template: {
            path: '/resources/views/{template}.{extension}',
            extension: 'html'
        },
        controller: {
            path: '/controllers/{controller}'
        },
        service: {
            path: '/src/{service}'
        },
        config: {
            path: '/resources/configs/{config}'
        },
        directive: {
            path: '/resources/directives/{directive}'
        },
        filter: {
            path: '/resources/filters/{filter}'
        }
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-storage': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'ngMaterial': {
            deps: ['angular', 'angular-aria', 'angular-animate']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'angular-translate-static-loader': {
            deps: ['angular-translate']
        },
        'angular-translate-local-storage': {
            deps: ['angular-translate']
        },
        'angular-translate-cookie-storage': {
            deps: ['angular-translate']
        },
        'angular-translate-interpolation-messageformat': {
            deps: ['angular-translate']
        },
        'angular-i18n-ru': {
            deps: ['angular']
        },
        'angular-dynamic-locale': {
            deps: ['angular']
        }
    }
});
//console.time('application loading');
require(['./bootstrap']);