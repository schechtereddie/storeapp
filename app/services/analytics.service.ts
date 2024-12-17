import { Observable } from '@nativescript/core';

export class AnalyticsService extends Observable {
    private static instance: AnalyticsService;

    private constructor() {
        super();
    }

    public static getInstance(): AnalyticsService {
        if (!AnalyticsService.instance) {
            AnalyticsService.instance = new AnalyticsService();
        }
        return AnalyticsService.instance;
    }

    public trackProductView(productId: string): void {
        console.log('Product viewed:', productId);
    }

    public trackARView(productId: string): void {
        console.log('AR view started:', productId);
    }

    public trackAddToCart(productId: string, quantity: number): void {
        console.log('Added to cart:', productId, quantity);
    }

    public trackCustomization(productId: string, customizations: Record<string, string>): void {
        console.log('Product customized:', productId, customizations);
    }
}