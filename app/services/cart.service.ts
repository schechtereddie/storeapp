import { Observable } from '@nativescript/core';
import { Cart, CartItem } from '../models/cart.model';
import { ProductService } from './product.service';

export class CartService extends Observable {
    private static instance: CartService;
    private _cart: Cart = { items: [], totalAmount: 0 };

    private constructor() {
        super();
    }

    public static getInstance(): CartService {
        if (!CartService.instance) {
            CartService.instance = new CartService();
        }
        return CartService.instance;
    }

    public getCart(): Cart {
        return this._cart;
    }

    public addToCart(item: CartItem): void {
        const existingItem = this._cart.items.find(i => 
            i.productId === item.productId && 
            JSON.stringify(i.customizations) === JSON.stringify(item.customizations)
        );

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this._cart.items.push(item);
        }

        this.updateTotalAmount();
        this.notifyPropertyChange('cart', this._cart);
    }

    public removeFromCart(index: number): void {
        this._cart.items.splice(index, 1);
        this.updateTotalAmount();
        this.notifyPropertyChange('cart', this._cart);
    }

    public updateQuantity(index: number, quantity: number): void {
        if (quantity > 0) {
            this._cart.items[index].quantity = quantity;
            this.updateTotalAmount();
            this.notifyPropertyChange('cart', this._cart);
        }
    }

    public clearCart(): void {
        this._cart.items = [];
        this.updateTotalAmount();
        this.notifyPropertyChange('cart', this._cart);
    }

    private updateTotalAmount(): void {
        this._cart.totalAmount = this._cart.items.reduce(
            (total, item) => total + (item.totalPrice * item.quantity),
            0
        );
    }
}