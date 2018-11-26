import { PaginaInicialPageModule } from './../pages/pagina-inicial/pagina-inicial.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContatoProvider } from '../providers/contato/contato';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Camera } from '@ionic-native/camera';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';
import { PaginaInicialPage } from '../pages/pagina-inicial/pagina-inicial';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PaginaInicialPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginaInicialPage
   
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoProvider,
    Camera,
    FileTransfer,
    AngularFireDatabase,
    File

    
     
  ]
})
export class AppModule {}
