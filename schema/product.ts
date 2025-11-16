import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  productImage: string;

  @Prop({
    type: [
      {
        color: { type: String, required: true },
        storage: { type: String, required: true },
        price: { type: Number, required: true },
        mrp: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],
    default: [],
  })
  variants: {
    color: string;
    storage: string;
    price: number;
    mrp: number;
    image: string;
  }[];

  @Prop({
    type: [
      {
        monthly: { type: Number, required: true },
        tenure: { type: Number, required: true },
        interestRate: { type: Number, required: true },
        cashback: { type: Number, default: 0 },
      },
    ],
    default: [],
  })
  emiPlans: {
    monthly: number;
    tenure: number;
    interestRate: number;
    cashback: number;
  }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
