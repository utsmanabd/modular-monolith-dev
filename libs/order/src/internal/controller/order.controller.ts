import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from '../../client';
import { OrderService } from '../service/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() payload: CreateOrderDto) {
    return this.orderService.createOrder(payload);
  }
}
