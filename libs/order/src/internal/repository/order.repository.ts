import { Injectable } from '@nestjs/common';
import { OrderResponseDto } from '../../client';

@Injectable()
export class OrderRepository {
  private readonly data = new Map<string, OrderResponseDto>();

  save(order: OrderResponseDto): OrderResponseDto {
    this.data.set(order.id, order);
    return order;
  }
}
