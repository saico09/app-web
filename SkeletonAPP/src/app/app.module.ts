import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enterAnimation } from './animations/nav-animations';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { IonicStorageModule } from '@ionic/storage-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HttpClientModule } from '@angular/common/http';

import { SQLite } from '@ionic-native/sqlite/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  
  imports: [HttpClientModule,BrowserModule,NgxQRCodeModule, IonicModule.forRoot({
    navAnimation:enterAnimation,
    
  }), AppRoutingModule, BrowserAnimationsModule, IonicModule.forRoot(),
  IonicStorageModule.forRoot()],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BarcodeScanner,EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
