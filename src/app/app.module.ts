import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PlacesService } from '../services/places.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	PlacePage,
	AddPlacePage,
	SetLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyDTbbf8SzR_pZFN6TdiIdJYEzSGEmr_gNQ'
	}),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	PlacePage,
	AddPlacePage,
	SetLocationPage
  ],
  providers: [
	{provide: ErrorHandler, useClass: IonicErrorHandler},
	PlacesService
	]
})
export class AppModule {}
