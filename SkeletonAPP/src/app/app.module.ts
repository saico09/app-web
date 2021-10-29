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

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  
  imports: [HttpClientModule,BrowserModule,NgxQRCodeModule, IonicModule.forRoot({
    navAnimation:enterAnimation,
    
  }), AppRoutingModule, BrowserAnimationsModule, IonicModule.forRoot(),
  IonicStorageModule.forRoot()],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
