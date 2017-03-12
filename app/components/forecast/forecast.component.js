import ForecastCtrl from './forecast.controller.js';
import template from './forecast.html';

let forecastComponent = {
    templateUrl: template,
    controller: ForecastCtrl,
    bindings: {
        forecastList: '<'
    }
};

angular.module('app').component('forecast', forecastComponent);