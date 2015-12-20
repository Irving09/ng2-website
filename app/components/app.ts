import { Component, View } from 'angular2/core';

@Component({
    selector: 'beta'
})
@View({
    templateUrl: './app/components/app.html'
})
export class App {
	ngOnInit() {

	  $('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrain_width: true,
	      hover: false, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: true // Displays dropdown below the button
	    }
	  );

	  $(document).ready(function(){
      	 $('.parallax').parallax();
      });
	}
}