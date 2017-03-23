import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AddPlacePage } from '../add-place/add-place';
import { Place } from '../../models/place.model';
import { PlacesService } from '../../services/places.service';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	addPlacePage = AddPlacePage;
	places: Place[] = [];
	
	constructor(public navCtrl: NavController, public placesService: PlacesService, public modalCtrl: ModalController) {

	}

	ionViewWillEnter(){
		
		this.places = this.placesService.getPlaces();
		console.log('ionViewWillEnter', this.places);
	}
	
	openPlace(place: Place, index:number){
		const modal = this.modalCtrl.create(PlacePage, {place, index});
		modal.present();
	}
	
	ngOnInit(){
		this.placesService.fetchPlaces()
			.then( (places: Place[]) => {
				this.places = places;
			});
		//this.loadPlaces();
	}
	
	loadPlaces(){
		this.places = this.placesService.getPlaces();
	}
}
