import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {
  img:String;
  constructor() { }

  ngOnInit() {
    this.img ='./assets/img/1.png';
  }

}
