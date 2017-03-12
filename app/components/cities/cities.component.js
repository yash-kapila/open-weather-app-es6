/*
    Cities component and its controller are defined in this file.
    This component is a stateless component. All data used in this is fed by its parent component.
*/

import CitiesCtrl from './cities.controller.js';
import template from './cities.html';

let citiesComponent = {
    templateUrl: template,
    controller: CitiesCtrl,
    bindings: {
        list: '<',
        weatherData: '<'
    }
};

angular.module('app').component('cities', citiesComponent);