import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DataModule } from './data/data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    DataModule,
    MongooseModule.forRoot('mongodb://localhost/ecommerce'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
