define(function(require) {
    var module = require('module!@');

    require('config!main')(module);
    require('controller!main');
});