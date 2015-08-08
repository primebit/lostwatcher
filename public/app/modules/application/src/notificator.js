define(function(require) {

    var module = require('module!@');

    module.service('application.service.notificator', [
        '$translate', 'toaster',
        function($translate, toaster){
            this.notifySuccess = function(titleTranslateKey, bodyTranslateKey) {
                if(!angular.isDefined(bodyTranslateKey))
                    bodyTranslateKey = '';
                showToaster('success', titleTranslateKey, bodyTranslateKey);
            }

            this.notifyError = function(titleTranslateKey, bodyTranslateKey) {
                if(!angular.isDefined(bodyTranslateKey))
                    bodyTranslateKey = '';
                showToaster('error', titleTranslateKey, bodyTranslateKey);
            }

            this.showToasterWithoutTranslate = function(type, titleMessage, bodyMessage) {
                toaster.pop(type, titleMessage, bodyMessage);
            }

            function showToaster(type, titleTranslateKey, bodyTranslateKey) {
                var title = '';
                var body = '';

                $translate(titleTranslateKey).then(function (translation) {
                    title = translation;
                    if (bodyTranslateKey != '') {
                        $translate(bodyTranslateKey).then(function (translation) {
                            body = translation;
                            toaster.pop(type, title, body);
                        }, function() {
                            $translate('errors.unknown').then(function (translation) {
                                toaster.pop('error', translation);
                            });
                        });
                    } else {
                        toaster.pop(type, title);
                    }
                }, function() {
                    $translate('errors.unknown').then(function (translation) {
                        toaster.pop('error', translation);
                    });
                });
            }
        }
    ]);
});