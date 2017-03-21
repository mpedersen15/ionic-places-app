import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { SetLocationPage } from '../set-location/set-location';
import { Location } from '../../models/location.model';
import { Geolocation, Camera, CameraOptions } from 'ionic-native';
import { PlacesService } from '../../services/places.service';


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
	imageUrl: string = "";
	
  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams, 
	public modalCtrl: ModalController,
	public loadingCtrl: LoadingController,
	public toastCtrl: ToastController,
	public placesService: PlacesService
	) {}

  submitForm(form){
	console.log('form submitted', form);
	this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
	form.reset();
	
	this.location = {
		lat: 40.762,
		lng: -73.975
	}
	
	this.imageUrl = "";
	this.locationSelected = false;
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
	const loader = this.loadingCtrl.create({
		content: 'Getting your location...'
	});
	loader.present();
	Geolocation.getCurrentPosition().then( (data) => {
		console.log('successfull get position', data);
		this.location.lat = data.coords.latitude;
		this.location.lng = data.coords.longitude;
		this.locationSelected = true;
		
		loader.dismiss();
		
	}, (error) => {
		console.log('error getting position', error);
		loader.dismiss();
		
		const toast = this.toastCtrl.create({
			message: "Could not get location, try again later or pick manually",
			duration: 2000
		})
	});
  }
  
  openCamera(){
	Camera.getPicture({
		encodingType: Camera.EncodingType.JPEG,
		correctOrientation: true
	}).then(
		(data) => {
			console.log('success getPicture', data);
			this.imageUrl = data;
		}, (error)=>{
			console.log('error getPicture', error);
		}
	)
  }
  
}
