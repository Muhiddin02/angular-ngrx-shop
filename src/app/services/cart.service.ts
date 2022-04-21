import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';

export interface Product{
  id:number;
  title: string;
  price: number;
  discountPercentage: number;
  description:string;
  rating: number;
  category:string;
  thumbnail:string;
}

export interface ProductGroup{
  product:Product,
  count: number
}

interface APIRespons{
  limit: number;
  products:Product[];
  skip:number;
  total:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'https://dummyjson.com/';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<APIRespons>(this.baseUrl+'products')
    .pipe(map(entity=>entity.products))
  }
}
