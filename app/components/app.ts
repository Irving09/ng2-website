import { Component, View } from 'angular2/core';
import { NavigationBar } from './nav-bar/nav-bar';

@Component({
    selector: 'beta'
})
@View({
    templateUrl: './app/components/app.html',
	directives: [ NavigationBar ]
})
export class App {
	ngOnInit() {
	  $(document).ready(function(){
      	 $('.parallax').parallax();
      });
	}
}