import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly database: Product[] = [];

  getAll() {
    return this.database;
  }

  add(product: Product) {
    this.database.push(product);
  }
}
