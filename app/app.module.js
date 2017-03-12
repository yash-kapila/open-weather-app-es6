/*
    This is the root file of the application. Angular is instantiated here.
*/

import Config from './app.config.js';

angular.module('app', ['ngRoute']);

angular.module('app').config(Config);