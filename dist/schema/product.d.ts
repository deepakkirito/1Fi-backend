import { Document } from 'mongoose';
export declare class Product extends Document {
    name: string;
    slug: string;
    brand: string;
    description: string;
    productImage: string;
    variants: {
        color: string;
        storage: string;
        price: number;
        mrp: number;
        image: string;
    }[];
    emiPlans: {
        monthly: number;
        tenure: number;
        interestRate: number;
        cashback: number;
    }[];
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export type ProductDocument = Product & Document;
