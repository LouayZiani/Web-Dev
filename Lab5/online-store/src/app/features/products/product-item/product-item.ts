import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,               // ✅ MUST BE TRUE
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage = '';

  ngOnInit(): void {
    this.selectedImage = this.product.image;
  }

  setImage(url: string): void {
    this.selectedImage = url;
  }

  like(): void {
    this.product.likes += 1;
  }

  requestDelete(): void {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }

  formatPriceKzt(value: number): string {
    return new Intl.NumberFormat('ru-KZ').format(value) + ' ₸';
  }

  whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  get fullStars(): number {
    return Math.floor(this.product.rating);
  }
  get hasHalfStar(): boolean {
    return this.product.rating - Math.floor(this.product.rating) >= 0.5;
  }
  get emptyStars(): number {
    const used = this.fullStars + (this.hasHalfStar ? 1 : 0);
    return Math.max(0, 5 - used);
  }
}