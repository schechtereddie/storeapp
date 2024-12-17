import { AR } from '@nativescript/ar';
import { Observable } from '@nativescript/core';

export class ARService extends Observable {
    private static instance: ARService;
    private ar: AR;

    private constructor() {
        super();
        this.ar = new AR();
    }

    public static getInstance(): ARService {
        if (!ARService.instance) {
            ARService.instance = new ARService();
        }
        return ARService.instance;
    }

    public async isSupported(): Promise<boolean> {
        return this.ar.isSupported();
    }

    public async startARSession(modelUrl: string): Promise<void> {
        if (!await this.isSupported()) {
            throw new Error('AR is not supported on this device');
        }

        try {
            await this.ar.startAR({
                model: modelUrl,
                scale: 1.0,
                rotation: 0,
                position: { x: 0, y: 0, z: 0 }
            });
        } catch (error) {
            console.error('AR Session Error:', error);
            throw new Error('Failed to start AR session');
        }
    }

    public async stopARSession(): Promise<void> {
        try {
            await this.ar.stopAR();
        } catch (error) {
            console.error('Stop AR Session Error:', error);
        }
    }
}