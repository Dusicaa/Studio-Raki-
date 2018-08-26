import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostoviService {

  putanja = "http://localhost:4200/assets/jsons";

  constructor(private service: HttpClient ){
      // this.service = new HttpClient(null)
  }

  dohvatiPostove(){
      var post = this.service.get(this.putanja + "/postovi.json");
      return post;
  }
  
}
