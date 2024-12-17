import { Observable } from '@nativescript/core';
import { Product } from '../../models/product.model';
import { products } from '../../data/products';
import { navigateToProductDetail } from '../../utils/navigation.utils';
import { formatPrice } from '../../utils/price.utils';

export class ProductListViewModel extends Observable {
    private _products: Product[];

    constructor() {
        super();
        this._products = products.map(product => ({
            ...product,
            formattedPrice: formatPrice(product.price)
        }));
    }

    get products(): Product[] {
        return this._products;
    }

    onProductTap(args: { index: number }): void {
        const product = this._products[args.index];
        navigateToProductDetail(product);
    }
}