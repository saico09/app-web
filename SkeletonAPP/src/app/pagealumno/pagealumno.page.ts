import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pagealumno',
  templateUrl: './pagealumno.page.html',
  styleUrls: ['./pagealumno.page.scss'],
})
export class PagealumnoPage implements OnInit {
  dato: any;  

  constructor(private activeRoute: ActivatedRoute, private router:Router,public navCtrl: NavController) { 
    //llamar a la ruta activa y obtener sus parámetros(si es que tiene)
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
    }

  ngOnInit() {
  }
  ingresa3(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/inicio']);

  }
}
