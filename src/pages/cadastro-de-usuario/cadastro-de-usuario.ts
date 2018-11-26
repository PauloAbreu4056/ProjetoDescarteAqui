import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';
//import { ValidateConfirmPassword } from '../../validators/confirmPassword';




@IonicPage({
  name:'cadastro-de-usuario',
})
@Component({
  selector: 'page-cadastro-de-usuario',
  templateUrl: 'cadastro-de-usuario.html',
})

export class CadastroDeUsuarioPage {

registerForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController
    ) {
      this.registerForm = this.formbuilder.group({

       name: [null,[Validators.required, Validators.minLength(5)]],
       //endereco: [null,[Validators.required, Validators.minLength(5)]],
       //telefone: [null,[Validators.required, Validators.minLength(11)]],
       email: [null,[Validators.required, Validators.email]],
       password: [null,[Validators.required, Validators.minLength(6)]],
       confirmPassword: [null,[Validators.required, Validators.minLength(6)]]

      })
  }

  submitForm (){
   this.afAuth.auth.createUserWithEmailAndPassword(
   this.registerForm.value.email, this.registerForm.value.password)
   .then((response) => {
     this.presentAlert('Atenção!', 'Usuário cadastrado com socesso.');
     this.navCtrl.setRoot('pagina-inicial');
    })
   .catch((error) => {
     if(error.code == 'auth/email-already-in-use'){
     this.presentAlert('Erro', 'E-mail já cadastrado');  

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

}
