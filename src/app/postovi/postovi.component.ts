
import { Component, OnInit } from '@angular/core';
import { SlikeService } from '../services/slike.service';
import { FormGroup, FormControl,Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-postovi',
  templateUrl: './postovi.component.html',
  styleUrls: ['postovi.component.css']
})
export class PostoviComponent implements OnInit {
 slike:any;
  vrste:any;
  slika;
  postovi;
  form;
 
  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor(private service: SlikeService,private router: Router,private auth: AuthService) { }

  ngOnInit() {
   this.slika=({
     imageUrl:"./../../assets/img/about2.jpg"
   })
   this.form = new FormGroup({

    
    nazivPosta: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[\\w\\-\\s\\/]+')

    ])),
    tekstPosta: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(10),

    ]))
  });


    this.service.dohvatiVrste().subscribe(
      response => {
        console.log(response);
        this.vrste = response;
      },
      error => {
        console.log(error);
      }
    );
     this.service.dohvatiPostove().subscribe(
      response => {
        console.log(response);
        this.postovi = response;
      },
      error => {
        console.log(error);
      }
    ); 
  } 
 
  onSubmit = function (user) {

    console.log(user);
  
  } 
  toogle(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
   
  }

  

}
