import { SlikeService } from './services/slike.service';
import { PostoviService } from './services/postovi.service';
import { AuthService } from './services/auth/auth.service';
import { ProductService } from './products/product.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostoviComponent } from './postovi/postovi.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductComponent } from './products/product.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Pipe, PipeTransform } from '@angular/core'; 
import { FilterPipe } from './filter.pipe';
import { BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';

/* import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth'; */

/* export const firebaseConfig={
  apiKey: "AIzaSyB76MEeKFPC838vtXW2vo-_dmL30LTyUuE",
  authDomain: "angular4-1fe1a.firebaseapp.com",
  databaseURL: "https://angular4-1fe1a.firebaseio.com",
  projectId: "angular4-1fe1a",
  storageBucket: "angular4-1fe1a.appspot.com",
  messagingSenderId: "65798863585"
}
 */

@NgModule({
  declarations: [
   
    AppComponent,
    AboutComponent,
    ContactComponent,
    PostoviComponent,
    GalleryComponent,
    SliderComponent,
    SignupFormComponent,
    ProductComponent,
   FilterPipe
  
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot([
         { path: '', component: SliderComponent },
       { path: 'about', component: AboutComponent },
       { path: 'contact', component: ContactComponent },
       { path: 'postovi', component: PostoviComponent },
       { path: 'gallery', component: GalleryComponent },
       { path: 'login', component: SignupFormComponent },
       { path: 'product', component:ProductComponent },
       { path: 'logout', component:AppComponent },
     ]),
     /* AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule,
     AngularFireAuthModule,
     AngularFireDatabaseModule */
  ],
  providers: [
    ProductService,
    AuthService,
    PostoviService,
    SlikeService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PostoviComponent,
    GalleryComponent,
  SliderComponent,
  SignupFormComponent,
ProductComponent]
})
export class AppModule { }
