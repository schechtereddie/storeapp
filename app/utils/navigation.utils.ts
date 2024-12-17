import { Frame } from '@nativescript/core';
import { Product } from '../models/product.model';

export function navigateToProductDetail(product: Product): void {
    Frame.topmost().navigate({
        moduleName: 'views/product-detail/product-detail-page',
        context: { product }
    });
}

export function navigateToCart(): void {
    Frame.topmost().navigate({
        moduleName: 'views/cart/cart-page',
        clearHistory: false
    });
}

export function navigateToProductList(): void {
    Frame.topmost().navigate({
        moduleName: 'views/product-list/product-list-page',
        clearHistory: true
    });
}