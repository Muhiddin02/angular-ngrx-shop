import { createAction, props } from '@ngrx/store';
import { Product } from '../services/cart.service';

export const ADD_PRODUCT = 'Add product';
export const REMOVE_PRODUCT = 'Remove product';
export const CLEAR_BASKET = 'Clear basket';

export const addProduct = createAction(ADD_PRODUCT, props<Product>());
export const removeProduct = createAction(REMOVE_PRODUCT, props<Product>());
export const clearBasket = createAction(CLEAR_BASKET);

