import { Observable } from '@nativescript/core';
import { Product } from '../models/product.model';
import { products } from '../data/products';

export class ProductService extends Observable {
    private static instance: ProductService;
    private products: Product[];

    private constructor() {
        super();
        this.products = products;
    }

    public static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    public getProducts(): Product[] {
        return this.products;
    }

    public getProductById(id: string): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    public calculateTotalPrice(product: Product, customizations: Record<string, string>): number {
        let total = product.price;
        
        Object.entries(customizations).forEach(([category, selectedOption]) => {
            const option = product.customizationOptions.find(opt => opt.name === category);
            if (option) {
                total += option.price;
            }
        });
        
        return total;
    }
}