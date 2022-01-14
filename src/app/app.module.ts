import { NgModule , LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs)


//Firebase
import { firebaseConfig } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/';
import{ AngularFireAuthModule} from '@angular/fire/auth';
import{ AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule  } from '@angular/fire/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule, AngularFirestoreModule, AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'es' },],
  bootstrap: [AppComponent],
})
export class AppModule {}
