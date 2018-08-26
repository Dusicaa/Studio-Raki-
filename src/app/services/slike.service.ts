import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { PostoviService } from './postovi.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlikeService {
 
  putanja = "http://localhost:4200/assets/jsons";

    constructor(private service: HttpClient,private postoviService: PostoviService ){
        // this.service = new HttpClient(null)
    }
   

    dohvatiSlike(){
        var slike = this.service.get(this.putanja + "/slike.json");
        return slike;
    }
    dohvatiVrste(){
        var vrste = this.service.get(this.putanja + "/vrste.json");
        return vrste;
    }
     dohvatiPostove(){
       
      var postovi = this.postoviService.dohvatiPostove();
      return postovi;
      }

}
