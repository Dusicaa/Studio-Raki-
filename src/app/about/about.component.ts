import { Component, OnInit } from '@angular/core';
import {
  trigger,state,style,transition,animate,keyframes
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css'],
  animations:[
    trigger('myAnimations',[

      state('small',style({
        transform:'scale(1)',

      })),
      state('large',style({
        transform:'scale(1.2)',

      })),

      transition('small => large',animate('300ms ease-in',
     
        style({
          transform:'translateY(40px)'
        }),
       
      
   )),
    ])
  ]
})
export class AboutComponent implements OnInit {
   slika;
  constructor() { }

  ngOnInit() {
    this.slika=({
      imageUrl:"./../../assets/img/about1.jpg"
    })
  }
  name="Aleksandar Rakić";
  state:string='small';

   animateMe(){
   this.state=(this.state === 'small'?'large':'small');
 }
}
