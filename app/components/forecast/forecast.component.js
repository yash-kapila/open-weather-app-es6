import ForecastCtrl from './forecast.controller.js';
import template from './template.constant.js';

let forecastComponent = {
    templateUrl: template,
    controller: ForecastCtrl,
    bindings: {
        forecastList: '<'
    }
};

angular.module('app').component('forecast', forecastComponent);