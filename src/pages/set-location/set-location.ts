import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Location } from '../../models/location.model';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html'
})
export class SetLocationPage {
	location: Location;
	marker: Location;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
	this.location = navParams.get('location');
  }

  setMarker(event: any){
	  console.log('map click', event);
	  this.marker = new Location(event.coords.lat, event.coords.lng);
  }
  
  confirmLocation(){
	this.viewCtrl.dismiss({marker: this.marker})
  }
  
  cancelLocation(){
	this.viewCtrl.dismiss()
  }
}
