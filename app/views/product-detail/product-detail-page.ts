import { NavigatedData, Page } from '@nativescript/core';
import { ProductDetailViewModel } from './product-detail-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    const product = page.navigationContext.product;
    page.bindingContext = new ProductDetailViewModel(product);
}