import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

@IonicPage({
  name: 'mapa',
})
@Component({
  selector: 'page-mapa', 
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: GoogleMap;
  
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public googleMaps: GoogleMaps){

    }
    ionViewDidLoad(){
      this.loadMap();
    }
    
    loadMap(){

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904, // default location
            lng: -89.3809802 // default location
          },
          zoom: 18,
          tilt: 30
        }
      };
    
      this.map = this.googleMaps.create('map_canvas', mapOptions);
    
      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        // Now you can use all methods safely.
        this.getPosition();
      })
      .catch(error =>{
        console.log(error);
      });
    
    }
    
    getPosition(): void{
      this.map.getMyLocation()
      .then(response => {
        this.map.moveCamera({
          target: response.latLng
        });
        this.map.addMarker({
          title: 'My Position',
          icon: 'blue',
          animation: 'DROP',
          position: response.latLng
        });
      })
      .catch(error =>{
        console.log(error);
      });
    }
   

}



 
  
  


