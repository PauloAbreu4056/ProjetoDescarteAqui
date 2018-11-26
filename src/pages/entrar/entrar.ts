import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

@IonicPage({
  name: 'entrar',
})
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

  entrarForm: FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public storage: Storage,
    public loadingCtrl: LoadingController
    ) {
      this.entrarForm=formbuilder.group({
        email: [null,[Validators.required, Validators.email]],
        password: [null,[Validators.required, Validators.minLength(6)]]
      })
  } 

  
  

  submitEntrar () {
   
    this.afAuth.auth.signInWithEmailAndPassword(
    this.entrarForm.value.email, this.entrarForm.value.password)
    .then((response) =>{ 
    this.storage.set('user',response.user.uid)
    .then(()=>{
    this.navCtrl.setRoot('pagina-inicial');
           
      })
           
   
    })
    .catch((error) => {
      if(error.code == 'auth/wrong-password'){
      this.presentAlert('Erro', 'Senha incorreta, digite novamente.'); 
      this.entrarForm.controls['password'].setValue(null);
  }
})
  }
  presentAlert(title: string, subtitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok']
    });
    alert.present();
  }
  ionViewCanEnter(){
      this.storage.get('user')
      .then((resolve) => {if(resolve.length >0){
this.navCtrl.setRoot('pagina-inicial');
      }else{
        return true;
      }
      })
      .catch(() =>{
        return true;
      })
  }
}
