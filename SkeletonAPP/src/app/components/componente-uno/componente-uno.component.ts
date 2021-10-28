import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {
  code:any;  
  constructor(private barcodeScanner: BarcodeScanner,) { }

  ngOnInit() {
    
    
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=barcodeData.text;
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });

  }
  

}
