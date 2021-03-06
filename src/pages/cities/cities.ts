import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from "../../providers/firebase.service";
import { PlacesPage } from "../places/places";


@IonicPage()
@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
  providers: [FirebaseService]
})
export class CitiesPage {
  country: any;
  cities: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private firebaseService:FirebaseService, public platform: Platform,
    public actionSheetCtrl: ActionSheetController) {
    this.country = this.navParams.get('country');
  }

  ionViewDidLoad() {
    this.cities = this.firebaseService.getCities(this.country.name);
  }

  citySelected(city) {
    this.navCtrl.push(PlacesPage,{
      city
    })
  }

}
