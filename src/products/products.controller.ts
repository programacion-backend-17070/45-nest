import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product, ProductForm } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<ProductForm[]> {
    return Promise.resolve(this.productsService.getAll() as ProductForm[]);
  }

  @Post()
  addProduct(@Body() product: ProductForm): Promise<Product> {
    this.productsService.add(product);
    return Promise.resolve(product);
  }
}
