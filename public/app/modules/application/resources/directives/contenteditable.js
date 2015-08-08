define(function(require){

    var module = require('module!@');

    module.directive('contenteditable', [
        function(){
            return {
                restrict: "A",
                require: "ngModel",
                link: function(scope, element, attrs, ngModel) {
                    var placeholder = attrs.placeholder || "";
                    function read() {
                        ngModel.$setViewValue(element.html());
                    }

                    ngModel.$render = function() {
                        element.html(ngModel.$viewValue || placeholder);
                    };

                    element.bind("focus", function(){
                        if(element.html() === placeholder)
                            element.html("");
                    });

                    element.bind("blur", function() {
                        if(element.html() == "")
                            element.html(placeholder);
                    });

                    element.bind("blur keyup change", function() {
                        scope.$apply(read);
                    });
                }
            };
        }
    ])
});