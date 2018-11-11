import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'descarteaqui',
})
@Component({
  selector: 'page-descarteaqui',
  templateUrl: 'descarteaqui.html',
})
export class DescarteaquiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescarteaquiPage');
  }

}
