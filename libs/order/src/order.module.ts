import { Module } from '@nestjs/common';
import { ProductModule } from '@app/product';
import { ORDER_CLIENT_TOKEN } from './client';
import { OrderInternalModule } from './internal/order-internal.module';
import { OrderService } from './internal/service/order.service';

@Module({
  imports: [ProductModule, OrderInternalModule],
  providers: [
    {
      provide: ORDER_CLIENT_TOKEN,
      useExisting: OrderService
    }
  ],
  exports: [ORDER_CLIENT_TOKEN]
})
export class OrderModule {}
