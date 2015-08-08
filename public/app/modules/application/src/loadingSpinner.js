define(function(require) {

    var module = require('module!@');

    module.service('application.service.loadingSpinner', [
        function(){
            var workingRequests = 0;

            this.showSpinner = function() {
                workingRequests++;
                $('#loadingSpinner').show();
            }

            this.hideSpinner = function() {
                workingRequests--;
                if(workingRequests < 0)
                    workingRequests = 0;
                if(workingRequests == 0)
                    $('#loadingSpinner').hide();
            }

        }
    ]);
});