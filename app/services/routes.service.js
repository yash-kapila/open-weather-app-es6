/*
    Routing in application is handled by this service
*/

class RouteService {
    constructor($location) {
        this.$location = $location;
    };

    goToDetailsView(path) {
        this.$location.path(path);
    };

    goBackToHome() {
        this.$location.path('/');
    };
};

angular.module('app').service('routeService', RouteService);