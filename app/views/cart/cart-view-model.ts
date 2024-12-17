import { Observable } from '@nativescript/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { navigateToProductList } from '../../utils/navigation.utils';

export class CartViewModel extends Observable {
    private cartService: CartService;
    private productService: ProductService;

    constructor() {
        super();
        this.cartService = CartService.getInstance();
        this.productService = ProductService.getInstance();
        this.updateCartData();
    }

    get items() {
        return this.cartService.getCart().items.map(item => {
            const product = this.productService.getProductById(item.productId);
            return {
                ...item,
                productName: product?.name,
                customizationsText: this.formatCustomizations(item.customizations)
            };
        });
    }

    get totalAmount() {
        return this.cartService.getCart().totalAmount.toFixed(2);
    }

    onIncrementQuantity(args: any) {
        const index = args.object.parent.parent.bindingContext.index;
        const currentQuantity = this.cartService.getCart().items[index].quantity;
        this.cartService.updateQuantity(index, currentQuantity + 1);
        this.updateCartData();
    }

    onDecrementQuantity(args: any) {
        const index = args.object.parent.parent.bindingContext.index;
        const currentQuantity = this.cartService.getCart().items[index].quantity;
        if (currentQuantity > 1) {
            this.cartService.updateQuantity(index, currentQuantity - 1);
            this.updateCartData();
        }
    }

    onRemoveItem(args: any) {
        const index = args.object.parent.bindingContext.index;
        this.cartService.removeFromCart(index);
        this.updateCartData();
    }

    onClearCart() {
        this.cartService.clearCart();
        this.updateCartData();
    }

    onStartShopping() {
        navigateToProductList();
    }

    onCheckout() {
        // Implement checkout logic
        alert("Checkout functionality coming soon!");
    }

    private formatCustomizations(customizations: Record<string, string>): string {
        return Object.entries(customizations)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
    }

    private updateCartData() {
        this.notifyPropertyChange('items', this.items);
        this.notifyPropertyChange('totalAmount', this.totalAmount);
    }
}