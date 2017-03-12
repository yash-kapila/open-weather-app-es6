/*
    Home component and its controller are defined in this file.
*/

import template from './home.html';
import HomeCtrl from './home.controller.js';

let homeComponent = {
    templateUrl: template,
    controller: HomeCtrl
};

angular.module('app').component('home', homeComponent);