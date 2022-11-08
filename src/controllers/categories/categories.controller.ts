import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
  getCategory(@Param('id') productId:string,@Param('productId') categoryId:string){
    return `product ${productId} and ${categoryId}`;
  }
}
