import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location.model';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html'
})
export class AddPlacePage {
	location: Location = {
		lat: 40.762,
		lng: -73.975
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  submitForm(form){
	console.log('form submitted', form);
  }
  
  openMap(){
  
	const modal = this.modalCtrl.create(SetLocationPage, {location: this.location});
	modal.present();
  }
  
}
