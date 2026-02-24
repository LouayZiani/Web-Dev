import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CATEGORIES, PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductListComponent } from './features/products/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectedProducts: Product[] = [];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.selectedProducts = this.allProducts.filter(p => p.categoryId === id);
  }

  clearCategory() {
    this.selectedCategoryId = null;
    this.selectedProducts = [];
  }
}