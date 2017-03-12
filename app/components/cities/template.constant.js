/*
    This file contains all the constants that are used by the Cities component's template
*/

let CitiesTemplate = {
    'tableHeading': [
        'City',
        'Current Weather',
        'Sunrise Time(GMT)',
        'Sunset Time(GMT)'
    ],
    'loadingMessage': 'Loading Data'
};

angular.module('app').constant('CitiesTemplate', CitiesTemplate);