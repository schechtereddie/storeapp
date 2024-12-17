import { Observable } from '@nativescript/core';
import { Product, CustomizationOption } from '../../models/product.model';
import { showARModel } from '../../utils/ar.utils';
import { formatPrice, calculateOptionPrice } from '../../utils/price.utils';

export class ProductDetailViewModel extends Observable {
    private _product: Product;
    private _selectedOptions: Record<string, string> = {};
    private _totalPrice: number;

    constructor(product: Product) {
        super();
        this._product = product;
        this._totalPrice = product.price;
        this.updateFormattedPrices();
    }

    get product(): Product {
        return this._product;
    }

    get totalPrice(): string {
        return formatPrice(this._totalPrice);
    }

    async onViewAR(): Promise<void> {
        try {
            await showARModel(this._product.arModelUrl);
        } catch (error) {
            console.error('AR error:', error);
            alert(error.message || "Failed to start AR experience");
        }
    }

    onOptionSelect(args: { object: { text: string; parent: { parent: { name: string } } } }): void {
        const option = args.object.text;
        const category = args.object.parent.parent.name;
        this._selectedOptions[category] = option;
        this.calculateTotalPrice();
    }

    private calculateTotalPrice(): void {
        let total = this._product.price;
        
        Object.entries(this._selectedOptions).forEach(([category, selectedOption]) => {
            const option = this._product.customizationOptions.find(opt => opt.name === category);
            if (option) {
                total = calculateOptionPrice(total, option.price);
            }
        });
        
        this._totalPrice = total;
        this.notifyPropertyChange('totalPrice', this.totalPrice);
    }

    private updateFormattedPrices(): void {
        this._product.formattedPrice = formatPrice(this._product.price);
        this._product.customizationOptions.forEach(option => {
            option.formattedPrice = formatPrice(option.price);
        });
    }
}