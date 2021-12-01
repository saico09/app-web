import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';
import { BdLocal2Service } from 'src/app/services/bd-local2.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {
  public nombre=localStorage.getItem('nombre')
  
  code:any; 
  public ban: boolean=false;
  public date: string ;
  public time: string ;

  public lista:any;

  public id:string;
  public seccion:string;
  public asignatura:string;
  public docente:string;
  public correo:string="correoejemplo@gmail.com";

  constructor(private emailComposer: EmailComposer,public toastController: ToastController,private barcodeScanner: BarcodeScanner,private bdlocal: BdLocalService) { }

  ngOnInit() {
    
    
  }

  OpenEmailComposer(){
    let email = {
      to: this.correo,
      subject: 'ASISTENCIA',
      body: this.nombre+' '+this.date+' '+this.time+' '+this.code
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  getAsistencia(){
    this.lista=this.bdlocal.cargarAsistencia();
  }

  scan(){
    this.date=new Date().toLocaleDateString();
    this.time=new Date().toLocaleTimeString();
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=JSON.parse(barcodeData.text); //convertir JSON a ARRAY
      console.log('Barcode data', barcodeData);

      this.correo=this.code['correo']

      this.guardar()
     }).catch(err => {
         console.log('Error', err);
     });
     
  }

  guardar(){
    
    if(this.bdlocal.asistenciaExiste(this.date,this.nombre)){
      this.presentToast2('ERROR: Ya existe asistencia')
    }
    else{
      this.presentToast2("Asistencia registrada")
      this.bdlocal.guardarAsistencia(this.nombre,this.date,this.time,this.code)
      console.log(this.nombre+this.date+this.time+this.code)
    }
    
  }
  
  async presentToast2(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:false,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();

  }

}
