import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll(): Promise<any[]> {
    return Promise.resolve(this.productService.getAll());
  }

  @Post()
  create(): Promise<any> {
    return Promise.resolve({});
  }

  @Delete()
  delete(): Promise<string> {
    return Promise.resolve('OK');
  }

  @Patch()
  update(): Promise<string> {
    return Promise.resolve('OK');
  }
}
