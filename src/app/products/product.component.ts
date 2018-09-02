import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { clone } from 'lodash';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';

@Component({
  //moduleId: module.id,
  selector: 'app-product',
  templateUrl: 'product.template.html',
  styleUrls: ['product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};
  slika;
  public show: boolean = false;
  public buttonName: any = 'Show';
  model: any = {};
  loading = false;
  returnUrl: string;
  invalidLogin: boolean;
  isLoggedIn = false;
  constructor(private _productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.slika = ({
      imageUrl: "./../../assets/img/about2.jpg"
    })
    this.getProducts();


  }

  getProducts() {
    this.products = this._productService.getProductsFromData();
  }

  showEditProductForm(product: Product) {
    if (!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if (this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Product) {
    if (this.isNewForm) {
      // add a new product
      this._productService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: Product) {
    this._productService.deleteProduct(product);
  }

  updateProduct() {
    this._productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }
  ulogujse() {

    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
