import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from 'src/data/product.service';
import {
  Product,
  ProductForm,
  ProductModel,
} from 'src/interfaces/product.interface';
//import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  getAll(): Promise<ProductModel[]> {
    return Promise.resolve(this.productsService.getAll());
  }

  @Post()
  addProduct(@Body() product: ProductForm): Promise<Product> {
    this.productsService.save(product);
    return Promise.resolve(product);
  }
}
