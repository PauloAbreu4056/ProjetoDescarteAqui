import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
     public navParams: NavParams,
     public storage: Storage
     
     ){
  }



}
