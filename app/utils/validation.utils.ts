import { APP_CONSTANTS } from '../config/constants';

export function validateQuantity(quantity: number): boolean {
    return quantity >= APP_CONSTANTS.MIN_QUANTITY && 
           quantity <= APP_CONSTANTS.MAX_QUANTITY;
}

export function validateCustomization(
    selectedOptions: Record<string, string>,
    availableOptions: string[]
): boolean {
    return Object.values(selectedOptions)
        .every(option => availableOptions.includes(option));
}