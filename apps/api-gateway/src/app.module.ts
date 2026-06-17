import { Module } from '@nestjs/common';
import { ProductModule } from '@app/product';
import { OrderModule } from '@app/order';

@Module({
  imports: [ProductModule, OrderModule]
})
export class AppModule {}
