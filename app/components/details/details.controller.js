export default class DetailsCtrl {
    constructor($routeParams, spinnerService, dataService, appService, Common, DetailsTemplate, routeService) {
        this.$routeParams = $routeParams;
        this.spinnerService = spinnerService;
        this.dataService = dataService;
        this.appService = appService;
        this.common = Common;
        this.template = DetailsTemplate;
        this.routeService = routeService;
    };

    $onInit() {
        this.spinnerService.showSpinner();
        this.forecastList = [];
        this.cityName = '';
        this.countryCode = '';
        this.isDataLoaded = false;
        this.getSeaLevelData(this.$routeParams.id);
    };

    getSeaLevelData(id) {
        this.dataService.getSeaLevelData(id)
            .then(response => {
                this.forecastList = this.appService.getHours(response.data.list);
                this.cityName = response.data.city.name;
                this.countryCode = response.data.city.country;
                this.filterForecastList(this.forecastList);
                this.convertTemperatureToCelsius(this.forecastList);
            })
            .catch(err => {
                this.cityName = '';
                this.countryCode = '';
                this.forecastList = [];
            })
            .finally(() => {
                this.isDataLoaded = true;
                this.spinnerService.hideSpinner();
            })
    };

    filterForecastList(list) {
        this.forecastList = this.appService.filterForecastList(list);
    };

    convertTemperatureToCelsius(list) {
        this.forecastList = this.appService.convertTemperatureToCelsius(list);
    };

    goBackToHome() {
        this.routeService.goBackToHome();
    };

};