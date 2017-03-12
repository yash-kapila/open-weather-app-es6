/*
    This file contains the business logic of all components used in the application.
    Ideally, each component would have its own service containing business logic for only that component.
    However, in this case, because the components are very small, they are kept together in a single file.
*/

class AppService {
    constructor($filter) {
        this.$filter = $filter;
    };

    getHours(dateList) {
        for (let i = 0; i < dateList.length; i++) {
            let date = new Date(dateList[i].dt * 1000);
            dateList[i].dt = this.$filter('date')(date, 'HH', 'GMT');
            dateList[i].dt_txt = this.$filter('date')(date, 'longDate', 'GMT');
        };
        return dateList;
    };

    formatTime(weatherData) {
        for (let i = 0; i < weatherData.length; i++) {
            let sunrise = new Date(weatherData[i].sys.sunrise * 1000);
            weatherData[i].sys.sunrise = this.$filter('date')(sunrise, 'shortTime', 'GMT');

            let sunset = new Date(weatherData[i].sys.sunset * 1000);
            weatherData[i].sys.sunset = this.$filter('date')(sunset, 'shortTime', 'GMT');
        };

        return weatherData;
    };

    filterForecastList(list) {
        let tempList = list.filter(el => el.dt === "09");
        return tempList;
    };

    convertTemperatureToCelsius(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].main.temp_max = +(list[i].main.temp_max - 273.15).toFixed(2);
            list[i].main.temp_min = +(list[i].main.temp_min - 273.15).toFixed(2);
        };

        return list;
    };

}

angular.module('app').service('appService', AppService);