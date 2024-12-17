export function formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
}

export function calculateOptionPrice(basePrice: number, optionPrice: number): number {
    return basePrice + optionPrice;
}