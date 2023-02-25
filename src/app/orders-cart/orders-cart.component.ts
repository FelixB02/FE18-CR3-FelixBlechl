import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Ifoods } from '../Ifoods';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-orders-cart',
  templateUrl: './orders-cart.component.html',
  styleUrls: ['./orders-cart.component.css']
})
export class OrdersCartComponent implements OnInit {
  items: Ifoods[] = [];
  price: number = 0
  numberItems: number = 0;


  constructor(private cartService: CartService) { }

  // Creating Form for ordering
  subscribeform: any = new FormGroup({
    yourname: new FormControl('', Validators.required),
    paymentmethod: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
  });

  orderDone() {
    alert("Your order has been placed")
  }

  // Function to clear the cart
  clearCart() {
    this.cartService.clearCart;
    this.items = this.cartService.clearCart(); 
    this.price = this.cartService.newPrice();
    
    
  }

  // On site load display all the items in cart and the prices
  ngOnInit(): void {
    this.items = this.cartService.getItems(); 
    this.price = this.cartService.newPrice();
    this.numberItems = this.cartService.newNumber();
  }
}
