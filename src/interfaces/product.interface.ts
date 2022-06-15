import { ApiProperty } from '@nestjs/swagger';

export interface Product {
  name: string;
  price: number;
  platform: 'Xbox' | 'PS4' | 'Nintendo';
  description: string;
}

export interface ProductModel extends Product {
  id: string;
}

export class ProductForm implements Product {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly platform: 'Xbox' | 'PS4' | 'Nintendo';

  @ApiProperty()
  readonly description: string;
}
