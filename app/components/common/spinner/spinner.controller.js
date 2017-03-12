export default class SpinnerCtrl {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
    };

    $onInit() {
        this.spinner = true;
        this.spinnerService.showSpinner = this.showSpinner.bind(this);
        this.spinnerService.hideSpinner = this.hideSpinner.bind(this);
    };

    showSpinner() {
        this.spinner = true;
    };

    hideSpinner() {
        this.spinner = false;
    };
};