import { Component } from '@angular/core';
import { foods } from '../foods';
import { Ifoods } from '../Ifoods';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foods: Ifoods[] = foods

  // Function for adding to Cart
  test(id: number) {
    this.cartService.addToCart(this.foods[id])
  }
  

  constructor( private cartService: CartService) { }
  

}
