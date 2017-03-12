export default class HomeCtrl {
    constructor(spinnerService, CitiesList, dataService, $q, HomeTemplate) {
        this.spinnerService = spinnerService;
        this.citiesList = CitiesList;
        this.dataService = dataService;
        this.$q = $q;
        this.template = HomeTemplate;
    };

    $onInit() {
        this.spinnerService.showSpinner();
        this.citiesWeatherData = [];
        this.getCurrentWeatherDataForAllCities(this.citiesList);
    };

    getCurrentWeatherDataForAllCities(list) {
        let promises = [];

        for (let i = 0; i < list.length; i++) {
            promises.push(this.dataService.getCurrentWeather(list[i]._id));
        };

        this.$q.all(promises)
            .then(arr => {
                let weatherData = []
                for (let i = 0; i < arr.length; i++) {
                    weatherData.push(arr[i].data);
                };

                this.citiesWeatherData = weatherData;
                this.dataAvailable = false;
            })
            .catch(err => {
                this.citiesWeatherData = [];
                this.dataAvailable = false;
            })
            .finally(() => {
                this.spinnerService.hideSpinner();
            })
    };
};
