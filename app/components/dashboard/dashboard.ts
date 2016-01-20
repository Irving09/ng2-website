import { Component, View } from 'angular2/core';
import { Navbar } from '../nav-bar/nav-bar';
import { Philippines } from '../philippines/philippines';

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: './app/components/dashboard/dashboard.html',
    directives: [ Navbar, Philippines ]
})
export class Dashboard {}