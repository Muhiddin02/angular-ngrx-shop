import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product, CartService } from '../services/cart.service';
import { addProduct } from '../state/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService:CartService,
    private store: Store
    ) {
      this.products$ = this.cartService.getAll();
     }

  ngOnInit(): void {
  }

  buyProduct(product:Product){
    this.store.dispatch(addProduct(product));
  }
}
