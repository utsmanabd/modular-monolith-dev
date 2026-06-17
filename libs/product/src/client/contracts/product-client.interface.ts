import { CreateProductDto } from '../dto/create-product.dto';
import { ProductResponseDto } from '../dto/product-response.dto';

export interface ProductClient {
  createProduct(payload: CreateProductDto): Promise<ProductResponseDto>;
  getProductById(id: string): Promise<ProductResponseDto | null>;
}
