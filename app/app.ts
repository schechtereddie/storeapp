import { Application } from '@nativescript/core';
import { ARService } from './services/ar.service';
import { ProductService } from './services/product.service';

// Initialize services
ARService.getInstance();
ProductService.getInstance();

Application.run({ moduleName: 'app-root' });