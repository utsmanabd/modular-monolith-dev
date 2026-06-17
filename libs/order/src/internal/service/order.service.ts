import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PRODUCT_CLIENT_TOKEN, ProductClient } from '@app/product/client';
import { CreateOrderDto, OrderClient, OrderResponseDto } from '../../client';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService implements OrderClient {
  constructor(
    @Inject(PRODUCT_CLIENT_TOKEN)
    private readonly productClient: ProductClient,
    private readonly orderRepository: OrderRepository
  ) {}

  async createOrder(payload: CreateOrderDto): Promise<OrderResponseDto> {
    const product = await this.productClient.getProductById(payload.productId);

    if (!product) {
      throw new NotFoundException('Product not found for order creation');
    }

    const order: OrderResponseDto = {
      id: randomUUID(),
      productId: product.id,
      quantity: payload.quantity,
      totalPrice: product.price * payload.quantity
    };

    return this.orderRepository.save(order);
  }
}
