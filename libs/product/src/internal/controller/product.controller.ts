import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateProductDto } from '../../client';
import { ProductService } from '../service/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() payload: CreateProductDto) {
    return this.productService.createProduct(payload);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.getProductById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}
