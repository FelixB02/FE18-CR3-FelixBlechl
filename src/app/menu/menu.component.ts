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


  test(id: number) {
    this.cartService.addToCart(this.foods[id])
    alert("Added to Cart")
  }
  

  constructor( private cartService: CartService) { }
  

}
