import { Model } from 'mongoose';
import { Product } from 'schema/product';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<(import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
