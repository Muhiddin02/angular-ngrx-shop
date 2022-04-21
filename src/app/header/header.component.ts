import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from '../state/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  countProducts$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) { 
    this.countProducts$ = this.store.select(selectCountProducts)
    this.totalPrice$ = store.select(selectTotalPrice)

  }
}
