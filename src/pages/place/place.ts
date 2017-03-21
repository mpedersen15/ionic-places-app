import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Place } from '../../models/place.model';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
	place: Place;
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
		this.place = this.navParams.get('place');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PlacePage');
	}
  
	closeModal(){
		this.viewCtrl.dismiss();
	}
	
	deletePlace(){
		console.log('delete place');
		// this.placesService.deletePlace(this.place);
		this.closeModal();
	}
  
}
