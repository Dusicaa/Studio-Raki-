import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameValidators } from './username.validators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({

  //moduleId: module.id,
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  invalidLogin: boolean;
  isLoggedIn = false;
  public show: boolean = false;


  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute, ) { }
  ngOnInit() {
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  slika = ({
    imageUrl: "./../../assets/img/about.jpg"
  })
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        /* UsernameValidators.cannotContainSpace*/
      ],
        UsernameValidators.shouldBeUnique),

      password: new FormControl('', Validators.required)
    })
  });


  get username() {
    return this.form.get("account.username");
  }


  /*signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
      });
  }*/
  /************************************* */
  login() {
    this.show = !this.show;
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
}
