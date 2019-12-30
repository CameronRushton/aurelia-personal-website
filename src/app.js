import { inject, PLATFORM } from "aurelia-framework";
import { Router } from "aurelia-router"
import {activationStrategy} from 'aurelia-router';

@inject(Router)
export class App {

	constructor(router) {
		this.router = router;
	}

	navigateToRoute() {
		this.router.navigateToRoute('/')
	}

	configureRouter(config, router) {
		config.title = "CRushton Website";
		config.options.pushState = true;
		config.options.root = "/";
		config.map([
			{
				route: '/',
				name: 'home',
				moduleId: PLATFORM.moduleName('pages/home/home'),
				title: "Home",
			},
			{
				route: 'projects',
				moduleId: PLATFORM.moduleName('pages/projects/projects'),
				// activationStrategy: activationStrategy.replace,
				title: "Projects",
			},
			{
				route: 'contact',
				moduleId: PLATFORM.moduleName('pages/contact/contact'),
				// activationStrategy: activationStrategy.replace,
				title: "Contact",
			},
			{
				route: 'resume',
				moduleId: PLATFORM.moduleName('pages/resume/resume'),
				// activationStrategy: activationStrategy.replace,
				title: "Resume",
			}
		]);
	}

}

