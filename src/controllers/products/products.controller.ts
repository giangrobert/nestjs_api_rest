import { Controller, Get, Param, Query, Post, Body, Put, Delete, HttpStatus, HttpCode, Res} from '@nestjs/common';
import { Response } from 'express'

import { ProductsService } from "../../services/products/products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService:ProductsService){

    }
    @Get('filter')
    getFilter() {
        return {
            mesagge: "Yo soy un filter",
        };
    }
    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('id') productId: string) {
        return this.productsService.findOne(+productId);
        //response.status(200).send(
        //    {
        //        mesagge: `product ${productId}`,
        //    }
        //)
    }
    
    @Get()
    getProducts(@Query('limit') limits = 100, @Query('offset') offset = 0, @Query('brand') brand: string) {
        //return {
        //    message: `products limits => ${limits},  offset => ${offset}, brand => ${brand}`,
        //};
        return this.productsService.findAll();
    }

    @Post()
    create(@Body() payload:any){
        //return {
        //    message: 'acción de crear',
        //    payload,
        //};
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param(':id') id:string, @Body() payload:any){
        //return{
        //    id,
        //    payload
        //}
        return this.productsService.update(+id,payload);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return id;
    }

}
