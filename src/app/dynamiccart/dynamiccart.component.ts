import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-dynamiccart',
  templateUrl: './dynamiccart.component.html',
  styleUrls: ['./dynamiccart.component.scss']
})
export class DynamiccartComponent implements OnInit {

  @Input() cartItems;

  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  onCartItemDeleted(event) {
    const id = event.target.getAttribute('id');

    let cartItemDeleted=({
        productId: id
      });

      this.cartItemDeleted.emit({
        productId: cartItemDeleted.productId
      });

   
  } 

}
