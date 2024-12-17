import { NavigatedData, Page } from '@nativescript/core';
import { CartViewModel } from './cart-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new CartViewModel();
}