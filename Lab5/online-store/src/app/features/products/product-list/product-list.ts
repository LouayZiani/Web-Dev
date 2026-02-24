import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,                 // ✅ MUST BE TRUE
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];

  visibleProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.visibleProducts = [...this.products];
    }
  }

  onDelete(id: number): void {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== id);
  }
}