import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'pagina-inicial',
})
@Component({
  selector: 'page-pagina-inicial',
  templateUrl: 'pagina-inicial.html',
})
export class PaginaInicialPage {

  constructor(
    public navCtrl: NavController, 
     public navParams: NavParams
     ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaInicialPage');
  }

}
