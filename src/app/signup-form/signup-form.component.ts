import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameValidators } from './username.validators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit() { 
   
  }
   slika=({
     imageUrl:"./../../assets/img/about.jpg"
   })
  form = new FormGroup({
account:new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
      UsernameValidators.shouldBeUnique),

    password: new FormControl('', Validators.required)
  })
});
 /*invalidSubmit:boolean;*/

  submit() {
   
      if (this.form.valid)
        this.router.navigate(['/adminPanel']);
      else  
      this.form.setErrors({
        invalidSubmit:true
      });
   

    }
     
   
    
  get username() {
    return this.form.get("account.username");
  }
}
