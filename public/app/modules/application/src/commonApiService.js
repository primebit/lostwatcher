define(function(require){

    var module = require('module!@');

    module.service('application.service.commonApiService', [
        '$rootScope', '$http', '$q', 'application.service.loadingSpinner',
        function($rootScope, $http, $q, LoadingSpinner){
            this.getCities = function() {
                var url = $rootScope.appConfig.apiUrlCities;
                LoadingSpinner.showSpinner();
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            // Private methods

            function handleError(response) {
                LoadingSpinner.hideSpinner();
                return($q.reject({}));
            }

            function handleSuccess(response) {
                LoadingSpinner.hideSpinner();
                return(response.data);
            }
        }
    ])
});