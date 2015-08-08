define(function(require) {
    return function(module){
        var module = require('module!@');

        module.config([
            '$urlRouterProvider', '$stateProvider',
            function($urlRouterProvider, $stateProvider) {
                $stateProvider
                    .state('app.main', {
                        url: '/',
                        template: require('template!main')
                    })
                ;
            }
        ]);
    }
});