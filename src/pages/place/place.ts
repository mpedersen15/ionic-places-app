import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Place } from '../../models/place.model';
import { PlacesService } from '../../services/places.service';
@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
	place: Place;
	index: number;
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public placesService: PlacesService) {
		this.place = this.navParams.get('place');
		this.index = this.navParams.get('index');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PlacePage');
	}
  
	closeModal(){
		this.viewCtrl.dismiss();
	}
	
	deletePlace(){
		console.log('delete place');
		
		this.placesService.deletePlace(this.index);
		this.closeModal();
	}
  
}
