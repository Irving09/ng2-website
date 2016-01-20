import { Component, View } from 'angular2/core';
import { Navbar } from './nav-bar/nav-bar';
import { Dashboard } from './dashboard/dashboard';

@Component({
    selector: 'beta'
})
@View({
    templateUrl: './app/components/app.html',
	directives: [ Navbar, Dashboard ]
})
export class App {
	ngOnInit() {
		this.domReady(function() {
			let materialize: any = $('.parallax');
			materialize.parallax();
		});
	}

	private domReady(callback: any) {
		document.readyState === 'interactive' ||
		document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
	}
}