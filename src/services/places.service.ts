import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';
import { Location } from '../models/location.model';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlacesService{
	private places: Place[] = [];
	
	constructor(public storage: Storage){}
	
	addPlace(title: string, description: string, location: Location, imageUrl: string){
		const place = new Place(title, description, location, imageUrl, );
		
		this.places.push(place);
		this.storage.set('places', this.places)
			.then()
			.catch(
				error => {
					this.places.pop();
				}
			);
		
	}
	
	getPlaces(){
		return this.places.slice(0);
	}
	
	fetchPlaces(){
		this.storage.get('places')
			.then( (places: Place[]) => {
				console.log('fetchPlaces data', places);
				this.places = (places != null) ? places : [];
			})
			.catch( error => {
				console.log('error', error);
			});
	}
	
	
	deletePlace(index){
		this.places.splice(index,1);
	}
}