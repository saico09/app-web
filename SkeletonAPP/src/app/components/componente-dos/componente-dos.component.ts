import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent implements OnInit {
  dato: string;

 

  //lista:any=this.bdlocal.cargarContactos();

  

  reg:any;
  public items: Array<any>;



  constructor(private activeRoute: ActivatedRoute, private router:Router,public navCtrl: NavController,
    private bdlocal: BdLocalService) { 
    //llamar a la ruta activa y obtener sus parámetros(si es que tiene)
    //this.activeRoute.queryParams.subscribe(params=>{
    //  if(this.router.getCurrentNavigation().extras.state){
    //    this.dato=this.router.getCurrentNavigation().extras.state.dato;
    //    console.log('Ha ingresado '+this.dato)
    //  }
    //});

  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.dato=localStorage.getItem('nombre')
    this.reg=localStorage.getItem('region')
    
    
  }

}

