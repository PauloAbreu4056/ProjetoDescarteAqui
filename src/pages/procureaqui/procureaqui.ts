import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'procureaqui',
})
@Component({
  selector: 'page-procureaqui',
  templateUrl: 'procureaqui.html',
})
export class ProcureaquiPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcureaquiPage');
  }

}
