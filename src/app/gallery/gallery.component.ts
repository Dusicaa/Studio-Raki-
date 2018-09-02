import { Component, OnInit } from '@angular/core';
import { SlikeService } from '../services/slike.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 slike:any;
 pozadina;
  constructor(private service: SlikeService) { }

  ngOnInit() {
   
  
      this.pozadina=({
        imageUrl:"./../../assets/img/selo.jpg"
      })
    

    // success: function(podaci)
    this.service.dohvatiSlike().subscribe(
      response => {
        console.log(response);
        this.slike = response;
      },
      error => {
        console.log(error);
      }
    );
  } 
  
 

}
export class Slike {
  constructor(
    public filter: string,
    public imageUrl: any) { }
}


 

