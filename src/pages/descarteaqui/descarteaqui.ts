import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage({
  name: 'descarteaqui',
})
@Component({
  selector: 'page-descarteaqui',
  templateUrl: 'descarteaqui.html',
})
export class DescarteaquiPage {

 public base64Image: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera
    ) {
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
