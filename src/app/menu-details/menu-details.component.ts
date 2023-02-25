import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { foods } from '../foods';
import { Ifoods } from '../Ifoods';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  food: Ifoods  = {} as Ifoods;
  id: number = 0

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  // Function to add in Cart
  addToCart() {
    this.cartService.addToCart(this.food);
  }
  
  // Getting the last number of the URL
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = +params['menuId'];
     this.food = foods[this.id];
   });
  }
}
