import { Module } from '@nestjs/common';
import { ProductModule } from '@app/product';
import { OrderController } from './controller/order.controller';
import { OrderRepository } from './repository/order.repository';
import { OrderService } from './service/order.service';

@Module({
  imports: [ProductModule],
  controllers: [OrderController],
  providers: [OrderRepository, OrderService],
  exports: [OrderService]
})
export class OrderInternalModule {}
