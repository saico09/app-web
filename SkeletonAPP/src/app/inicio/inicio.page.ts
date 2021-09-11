import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ingresa2(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/home']);

  }

  ingresa(){

    //Utilizar API enrutador para llamar a la siguiente página

    this.router.navigate(['/home-alumno']);

  }
}
