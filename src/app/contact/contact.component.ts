import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  form;
  slika;
  constructor() { }

  ngOnInit() {
    this.slika=({
      imageUrl:"./../../assets/img/about2.jpg"
    })
    this.form = new FormGroup({

      firstname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')

      ])),
      lastname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+')

      ])),
      message: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(10),

      ]))
    });
  }
 
  onSubmit = function (user) {

    console.log(user);

  }
}

