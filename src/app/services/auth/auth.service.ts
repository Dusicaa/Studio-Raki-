import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
   

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private service: HttpClient,private http: Http,private router:Router) { }

  putanja = "http://localhost:4200/assets/jsons";

  public user;
  isLoggedIn = false;
 
  dohvatiKorisnike() {
    this.user = this.service.get(this.putanja + "/users.json");
    return this.user;
  }

 /* login(credentials) { 
    return this.http.post('/api/authenticate', 
       JSON.stringify(credentials));
       
   }

  logout(): void {
    this.isLoggedIn = false;
    
  }*/

   login(username: string, password: string) {
            return this.http.post('/api/authenticate', { username: username, password: password })
                .map(user => {
                    // login successful if there's a jwt token in the response
                    if (user ) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }
     
                    return user;
                });
        }
     
        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    
        }
    isLoggedin(){
      if(this.user==null)
      this.isLoggedIn = false;
      else
      this.isLoggedIn = true;
    }
}


