import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Location } from '../../models/location.model';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html'
})
export class SetLocationPage {
	location: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.location = navParams.get('location');
  }

  
  
}
