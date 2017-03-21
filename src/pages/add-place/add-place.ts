import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location.model';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {
	location: Location = {
		lat: 40.762,
		lng: -73.975
	}
	locationSelected: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  submitForm(form){
	console.log('form submitted', form);
  }
  
  openMap(){
  
	const modal = this.modalCtrl.create(SetLocationPage, {location: this.location, isSelected: this.locationSelected});
	modal.present();
	
	modal.onDidDismiss( (data) => {
		if (data) {
			console.log(data);
			this.location = data.marker;
			this.locationSelected = true;
		};
	});
  }
  
  getLocation(){
	Geolocation.getCurrentPosition().then( (data) => {
		console.log('successfull get position', data);
		this.location.lat = data.coords.latitude;
		this.location.lng = data.coords.longitude;
		this.locationSelected = true;
	}, (error) => {
		console.log('error getting position', error);
	});
  }
  
}
