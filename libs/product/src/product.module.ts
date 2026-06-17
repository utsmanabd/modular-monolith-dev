import { Module } from '@nestjs/common';
import { PRODUCT_CLIENT_TOKEN } from './client';
import { ProductInternalModule } from './internal/product-internal.module';
import { ProductService } from './internal/service/product.service';

@Module({
  imports: [ProductInternalModule],
  providers: [
    {
      provide: PRODUCT_CLIENT_TOKEN,
      useExisting: ProductService
    }
  ],
  exports: [PRODUCT_CLIENT_TOKEN]
})
export class ProductModule {}
