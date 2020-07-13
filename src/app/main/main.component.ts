import { Component, OnInit,EventEmitter, Output ,Input} from '@angular/core';
import { Product } from './product.model';
import { CartItem } from '../dynamiccart/cart-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cartItems=[];

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();

  product: Product[] = [
    new Product(1,' Duster CVT', 15, 'assets/duster.jpeg'),
    new Product(2,'Laptop', 5, 'assets/lap.jpeg'),
    new Product(3,'Tiago AMT', 10 , 'assets/tiago.jpg'),
    new Product(4,'Tesla Y', 35, 'https://www.tesla.com/sites/default/files/images/blogs/models_blog_post.jpg'),
    new Product(5,' Nexon AMT', 10 , 'assets/nexon.jpg'),
    new Product(6,' Duster CVT (Diesel)', 15, 'assets/duster.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onCartUpdated(event){
    //const id = event.target.getAttribute('id');

    const id = event.target.getAttribute('id');
    const index = this.product.findIndex(elem => elem.id == id);

    let cartUpdated = ({
      productId: this.product[index].id,
      productName: this.product[index].name,
      productPrice: this.product[index].price
    });

   // const index = this.productItem.findIndex(elem => elem.id == id);
 
      
    const indexincart = this.cartItems.findIndex( elem => elem.id == cartUpdated.productId)
    
    if (indexincart===-1) {
      this.cartItems.push({
          id: cartUpdated.productId,
          name: cartUpdated.productName,
          quantity: 1,
          price: cartUpdated.productPrice,
          total: cartUpdated.productPrice * 1
      });
    } else {
      this.cartItems[indexincart].id = cartUpdated.productId;
      this.cartItems[indexincart].name = cartUpdated.productName;
      this.cartItems[indexincart].quantity++;
      this.cartItems[indexincart].price = cartUpdated.productPrice;
      this.cartItems[indexincart].total = this.cartItems[indexincart].price * this.cartItems[indexincart].quantity;
      
    }

    //  this.cartItems.push({
    //   productId: this.product[index].id,
    //   productName: this.product[index].name,
    //   productPrice: this.product[index].price
    //  });
    // this.cartUpdated.emit({
    //     productId: this.product[index].id,
    //     productName: this.product[index].name,
    //     productPrice: this.product[index].price
    //   });

    
  }

  onCartItemDeleted(productData:{productId: number}) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    this.cartItems.splice(index,1);
    //this.updateCartTotal();
  }
  
}
