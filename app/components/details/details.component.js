/*
    CityDetails component and its controller are defined in this file.
*/

import template from './details.html';
import DetailsCtrl from './details.controller.js';

let DetailsComponent = {
    templateUrl: template,
    controller: DetailsCtrl
};

angular.module('app').component('cityDetails', DetailsComponent);