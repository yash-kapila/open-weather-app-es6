/*
    This file belongs to the Spinner component's service. 
    Methods defined here are bound to the Spinner component's Methods
*/

export default class SpinnerService {
    constructor() { };

    showSpinner() { };

    hideSpinner() { };
};

angular.module('app').service('spinnerService', SpinnerService);