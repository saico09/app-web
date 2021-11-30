import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { BdLocalService } from 'src/app/services/bd-local.service';
import { BdLocal2Service } from 'src/app/services/bd-local2.service';

@Component({
  selector: 'app-pagealumno',
  templateUrl: './pagealumno.page.html',
  styleUrls: ['./pagealumno.page.scss'],
})
export class PagealumnoPage implements OnInit {
  dato: string;
  nombre: string= localStorage.getItem('nombre')
  code:any;  
  lista: Array<any> = [
    {
      titulo:"perro",
      color:"#444"
    },
    {
      titulo:"gato",
      color:"#999"
    }
  ]
  reg:any;
  res: any;

  asignatura:Array<any>;

  listaAlumnos: any;
  listaAsistencia:any/*=[
    {
      strNom:"asda",
      strFecha:"02/22/2021",
      strHora:"22:02",
      strClase:[
        {
          A:"a",
          B:"b"
        }
      ]

    }
  ]*/;

  //listaAsistencia: any=this.bdlocal.cargarContactos();

  
  constructor(private activeRoute: ActivatedRoute, private router:Router,public navCtrl: NavController,
    private bdlocal: BdLocalService) {

      //llamar a la ruta activa y obtener sus parámetros(si es que tiene)
      this.activeRoute.queryParams.subscribe(params=>{
        if(this.router.getCurrentNavigation().extras.state){
          this.dato=this.router.getCurrentNavigation().extras.state.dato;
          //console.log(this.dato)
        }
      });
    }

  ngOnInit() {
    
    this.dato=localStorage.getItem('nombre')
    //console.log(this.lista)

    this.bdlocal.cargarContactos().then(res => console.log(res));
    this.bdlocal.cargarContactos().then(res => this.listaAlumnos=res);

    this.bdlocal.cargarAsistencia().then(res2 => console.log(res2));
    this.bdlocal.cargarAsistencia().then(res2 => this.listaAsistencia=res2);
    

    console.log(this.listaAlumnos)
    console.log(this.listaAsistencia)
  }




  ingresa3(){

    //Utilizar API enrutador para llamar a la siguiente página
    localStorage.clear();

    this.router.navigate(['/inicio']);

  }

  segmentChanged(event){
    console.log(event)
    let direccion=event.detail.value
    this.router.navigate(['pagealumno/'+direccion])
  }
}
