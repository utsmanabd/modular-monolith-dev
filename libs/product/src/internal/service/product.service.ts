import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateProductDto, ProductClient, ProductResponseDto } from '../../client';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService implements ProductClient {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(payload: CreateProductDto): Promise<ProductResponseDto> {
    const product: ProductResponseDto = {
      id: randomUUID(),
      name: payload.name,
      price: payload.price
    };

    return this.productRepository.save(product);
  }

  async getProductById(id: string): Promise<ProductResponseDto | null> {
    return this.productRepository.findById(id);
  }
}
