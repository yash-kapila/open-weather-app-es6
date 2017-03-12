/*
    Spinner component and its controller are defined in this file.
    The Spinner service methods are also bound to the controller methods here.
*/

import template from './spinner.html';
import SpinnerCtrl from './spinner.controller.js';

let spinnerComponent = {
    templateUrl: template,
    controller: SpinnerCtrl
};

angular.module('app').component('spinner', spinnerComponent);