import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { APIClientService } from 'src/app/servicesapi/apiclient.service';

import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  anim:Animation;
  @ViewChild('square', {static: false} ) square:ElementRef;
  isPlaying=false;
  user:any;
  users:any;
  constructor(private router:Router,private animationCtrl: AnimationController,private api: APIClientService) { }
  
  ionViewWillEnter(){
    this.getUsers()
  }
  
  getUsers(){

    this.api.getUsers().subscribe((data)=>{

      this.users=data;

    })


  }
  

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
  registrar(){
    this.router.navigate(['/registrar']);
  }
}
