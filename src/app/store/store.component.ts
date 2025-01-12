import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  searchQuery = '';
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },

  ];

  cart: Product[] = [];

  get filteredProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToCart(product: Product) {
    this.cart.push(product);
    alert(`${product.name} added to cart!`);
  }

  openCart() {
    console.log('Cart:', this.cart);
    // Εδώ μπορείς να κάνεις πλοήγηση σε ένα ξεχωριστό cart component.
  }
}

