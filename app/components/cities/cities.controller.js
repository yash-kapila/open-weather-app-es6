export default class CitiesCtrl {
    constructor(CitiesTemplate, Common, routeService, appService) {
        this.CitiesTemplate = CitiesTemplate;
        this.Common = Common;
        this.routeService = routeService;
        this.appService = appService;
    };

    $onInit() {
        this.template = this.CitiesTemplate;
        this.common = this.Common;
    };

    $onChanges(changes) {
        this.weatherData = changes.weatherData.currentValue;
        this.isDataRetrieving = this.weatherData.length === 0 ? false : true;
        if (this.weatherData.length)
            this.formatDate(this.weatherData);
    };

    formatDate(weatherData) {
        this.weatherData = this.appService.formatTime(weatherData);
    };

    viewSeaLevelDetails(record) {
        var url = '/' + record.id;
        this.routeService.goToDetailsView(url);
    }

};