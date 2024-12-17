import { NavigatedData, Page } from '@nativescript/core';
import { ProductListViewModel } from './product-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new ProductListViewModel();
}