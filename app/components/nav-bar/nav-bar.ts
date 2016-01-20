import { Component, View } from 'angular2/core';

@Component({
    selector: 'navbar'
})
@View({
    templateUrl: './app/components/nav-bar/nav-bar.html',
})
export class Navbar {

    ngOnInit() {
        let button: any = $('.dropdown-button');
        button.dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: true,
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true // Displays dropdown below the button
        });
    }
}