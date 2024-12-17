import { AR } from '@nativescript/ar';

let arInstance: AR | null = null;

export function initializeAR(): void {
    arInstance = new AR();
}

export async function checkARSupport(): Promise<boolean> {
    if (!arInstance) {
        throw new Error('AR not initialized');
    }
    return arInstance.isSupported();
}

export async function showARModel(modelUrl: string): Promise<void> {
    if (!arInstance) {
        throw new Error('AR not initialized');
    }
    
    const isSupported = await checkARSupport();
    if (!isSupported) {
        throw new Error('AR is not supported on this device');
    }
    
    await arInstance.startAR({ model: modelUrl });
}