import { APP_CONSTANTS } from '../config/constants';

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: APP_CONSTANTS.CURRENCY
    }).format(amount);
}

export function formatCustomizationText(customizations: Record<string, string>): string {
    return Object.entries(customizations)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' | ');
}