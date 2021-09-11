import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagedocente',
  templateUrl: './pagedocente.page.html',
  styleUrls: ['./pagedocente.page.scss'],
})
export class PagedocentePage implements OnInit {
  qrdata: any;
  createCode: any;  

  dato:any;//tipo que permite cualquier valor
  constructor(private activeRoute: ActivatedRoute, private router:Router,public navCtrl: NavController) { 
  //llamar a la ruta activa y obtener sus parámetros(si es que tiene)
  this.activeRoute.queryParams.subscribe(params=>{
    if(this.router.getCurrentNavigation().extras.state){
      this.dato=this.router.getCurrentNavigation().extras.state.dato;
      console.log(this.dato)
    }

    
  });
  }
  public create() {
    this.createCode =this.qrdata;
    }
  public clear() {
    this.createCode ='';
    }
  ngOnInit() {
  }
  ingresa3(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/inicio']);

  }

}
