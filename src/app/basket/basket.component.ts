import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroup } from '../services/cart.service';
import { addProduct, clearBasket, removeProduct } from '../state/cart.actions';
import { selectGroupedCartEntries } from '../state/cart.selectors';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent{

  cartEntries$: Observable<ProductGroup[]>

  constructor(private store: Store) {
    this.cartEntries$ = store.select(selectGroupedCartEntries);
  }

  clearBasket () {
    this.store.dispatch(clearBasket());
  }

  increment(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  decrement(entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }
}
