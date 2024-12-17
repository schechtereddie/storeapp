export interface CartItem {
    productId: string;
    quantity: number;
    customizations: Record<string, string>;
    totalPrice: number;
}

export interface Cart {
    items: CartItem[];
    totalAmount: number;
}