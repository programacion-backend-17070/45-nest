import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import _ from 'lodash';
import { Model, Types } from 'mongoose';
import { ProductForm, ProductModel } from 'src/interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(@InjectModel('products') private model: Model<ProductModel>) {}

  async getAll(): Promise<ProductModel[]> {
    const data = await this.model.find({}).exec();
    return data;
  }

  async getById(id) {
    const item = await this.model.findById(new Types.ObjectId(id));
    if (!item) {
      return null;
    }
    return item;
  }

  async count(): Promise<number> {
    return this.model.countDocuments({});
  }

  // DELETE
  delete(id: string) {
    return this.model.deleteOne({ _id: new Types.ObjectId(id) });
  }

  async save(item: ProductForm) {
    const databaseData = await this.model.create(item);
    return databaseData;
  }
}
