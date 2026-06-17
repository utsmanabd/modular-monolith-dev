import { Injectable } from '@nestjs/common';
import { ProductResponseDto } from '../../client';

@Injectable()
export class ProductRepository {
  private readonly data = new Map<string, ProductResponseDto>();

  save(product: ProductResponseDto): ProductResponseDto {
    this.data.set(product.id, product);
    return product;
  }

  findById(id: string): ProductResponseDto | null {
    return this.data.get(id) ?? null;
  }
}
