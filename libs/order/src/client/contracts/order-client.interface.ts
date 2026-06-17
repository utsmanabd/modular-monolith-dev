import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderResponseDto } from '../dto/order-response.dto';

export interface OrderClient {
  createOrder(payload: CreateOrderDto): Promise<OrderResponseDto>;
}
