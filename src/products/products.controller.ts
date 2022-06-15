import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return Promise.resolve(this.productsService.getAll());
  }

  @Post()
  addProduct(@Body() product: Product): Promise<Product> {
    this.productsService.add(product);
    return Promise.resolve(product);
  }
}
