import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage({
  name: 'descarteaqui',
})
@Component({
  selector: 'page-descarteaqui',
  templateUrl: 'descarteaqui.html',
})
export class DescarteaquiPage {
  uid: string;
  task;
  list;
  photo: string = "";
  //currentPhoto;
constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera,
    public transfer: FileTransfer, 
    public file: File,
    public loadingCtrl:LoadingController,
    public storage: Storage,
    public db: AngularFireDatabase
    ) {}
  ionViewDidLoad()
  {this.storage.get('user')
  .then((resolve)=>{
  this.uid = resolve;
  this.getList();})
  console.log('ionViewDidLoad TakePicture');
  }
    addTask(task: string){
    this.db.database.ref('/tasks').child(this.uid).push({
    task: task
    })
    .then(()=>{
    this.task = " ";
     })}
    getList(){
      let listDB = this.db.database.ref('/tasks').child(this.uid);
      listDB.on('value', (snapshot)=>{
      const itens = snapshot.val();
      this.list = Object.keys(itens).map(i => itens[i]);
    })}


   
  
    


     takePicture(){
      this.photo = '';
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        targetWidth: 100,
        targetHeight: 100
      }
      this.camera.getPicture(options).then((imageData) =>{
        let base64image = 'data:image/jpeg;base64,' +  imageData;
        this.photo = base64image;
      },(error) =>{
        console.error(error);
      })
      .catch((error) =>{
        console.error(error);
      })
    }
    /** getPhoto(type){
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
    this.currentPhoto = 'data:image/jpeg;base64,' + imageData;}, (err) => {});*/
  }

 
