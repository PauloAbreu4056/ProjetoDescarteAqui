import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroDeUsuarioPage } from './cadastro-de-usuario';

@NgModule({
  declarations: [
    CadastroDeUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroDeUsuarioPage),
  ],
})
export class CadastroDeUsuarioPageModule {}
