import { Injectable } from '@nestjs/common';
import { Product, ProductForm, ProductModel } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {

  private readonly database: ProductModel[] = [];

  getAll(): ProductModel[] {
    return this.database;
  }

  save(product: ProductModel): ProductModel {
    product.id = (this.database[this.database.length - 1]?.id || 0) + 1
    this.database.push(product)

    return product
  }
}
