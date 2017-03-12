/*
    This service is used to retrieve data from the OpenWeatherMap APIs.
    Data retrieved is then passed on to the calling controller.
*/

class DataService {
    constructor($http, Common) {
        this.$http = $http;
        this.Common = Common;
    };

    getCurrentWeather(id) {
        return this.$http.get(this.Common.baseUrl.weather, {
            params: {
                id: id,
                appid: this.Common.APPID
            }
        });
    };

    getSeaLevelData(id) {
        return this.$http.get(this.Common.baseUrl.forecast, {
            params: {
                id: id,
                appid: this.Common.APPID
            }
        });
    };
};

angular.module('app').service('dataService', DataService);