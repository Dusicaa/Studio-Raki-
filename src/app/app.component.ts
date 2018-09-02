import { AuthService } from './services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService,private router: Router) { }
ngOnInit(){
  
}

/* isLoggedIn() {

    return this.auth.isLoggedin;
  
  }*/
  logout() :void{
    this.auth.logout;
    this.router.navigate(['/']);
   
  }

}

