export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    arModelUrl: string;
    customizationOptions: CustomizationOption[];
}

export interface CustomizationOption {
    name: string;
    options: string[];
    price: number;
}