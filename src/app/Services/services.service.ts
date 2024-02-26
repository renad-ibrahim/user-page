import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }
  getAllCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }
  getProductsOfCategory(categ:string){
    return this.http.get(" https://fakestoreapi.com/products/category/"+categ)
   
  }
}
