import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaInicialPage } from './pagina-inicial';

@NgModule({
  declarations: [
    PaginaInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaInicialPage),
  ],
  exports: [
    PaginaInicialPage
  ]
})
export class PaginaInicialPageModule {}
