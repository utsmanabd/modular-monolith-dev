import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductRepository } from './repository/product.repository';
import { ProductService } from './service/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository, ProductService],
  exports: [ProductService]
})
export class ProductInternalModule {}
