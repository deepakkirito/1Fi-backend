import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'schema/product';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  getProducts() {
    return this.productModel
      .find(
        {},
        {
          name: 1,
          slug: 1,
          brand: 1,
          description: 1,
          productImage: 1,
        },
      )
      .exec();
  }

  getProduct(id: string) {
    return this.productModel.findById(id).exec();
  }
}
