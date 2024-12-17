export interface CustomizationOption {
    name: string;
    options: string[];
    price: number;
}

export interface SelectedCustomization {
    optionName: string;
    selectedValue: string;
    additionalPrice: number;
}

export interface CustomizationState {
    selectedOptions: Record<string, string>;
    totalCustomizationPrice: number;
}