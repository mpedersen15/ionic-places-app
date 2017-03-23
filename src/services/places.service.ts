import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';
import { Location } from '../models/location.model';
import { Storage } from '@ionic/storage';
import { File } from 'ionic-native';

declare var cordova: any;

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
		return this.storage.get('places')
			.then( (places: Place[]) => {
				console.log('fetchPlaces data', places);
				return this.places = (places != null) ? places : [];
			})
			.catch( error => {
				console.log('error', error);
			});
	}
	
	
	deletePlace(index: number){
		const place = this.places[index];
		this.places.splice(index,1);
		console.log('in deletePlace, places', this.places);
		this.storage.set('places', this.places)
			.then( () => {
				console.log('success reset of places in deletePlace');
				this.removeFile(place);
			})
			.catch( error => {
				console.log('error setting places in storage');
			});
	}
	
	private removeFile(place: Place){
		const currentName = place.imageUrl.replace(/^.*[\\\/]/, '');
		File.removeFile(cordova.file.dataDirectory, currentName)
			.then( () => {
				console.log('image removed');
			})
			.catch( (error)=>{
				console.log('error removing file', error);
				this.addPlace(place.title, place.description, place.location, place.imageUrl);
			});
	}
}