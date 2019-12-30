import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router";

@inject(Router)
export class Projects {

	constructor(router) {
        this.router = router;
    }

	attached() {
        document.getElementById("top").scrollIntoView();
    }
}