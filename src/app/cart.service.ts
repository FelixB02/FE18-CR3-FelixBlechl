import { Injectable } from '@angular/core';
import { Ifoods } from './Ifoods';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Ifoods[] = []
  price: number = 0
  numberItems: number = 0

  constructor() { }

  addToCart(foods: Ifoods) {
    this.items.push(foods);
  }
  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    this.price = 0
    return(this.items)
  }

  newPrice() {
    this.price = 0
    for (let item of this.items) {
      this.price += item.price  
    }
    return this.price
  }

  newNumber() {
    this.numberItems = 0
    this.numberItems = this.items.length;
    return this.numberItems
  }

}
