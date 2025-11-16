import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/product").Product, {}, {}> & import("../../schema/product").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schema/product").Product, {}, {}> & import("../../schema/product").Product & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
