/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import * as dataAraay from "src/app.data"


@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post('/uploadData')
    async getCSVDataAndUpload(@Body() { path }) {
        return this.appService.getCSVDataAndUpload(path);
    }

    @Get('/filter/:type')
    async filterData(@Param('type') type: number, @Query('minPrice') minPrice?: number, @Query('maxPrice') maxPrice?: number, @Query('roomsQuantity') roomsQuantity?: number) {
        //precio
        if (type == 1)
            return dataAraay.data.data.filter(function (item) {
                if (Number(item.Precio) > Number(minPrice) && Number(item.Precio) < Number(maxPrice)) {
                    return item
                }
            });
        //habitaciones
        if (type == 2)
            return dataAraay.data.data.filter(function (item) {
                if (Number(item.Habitaciones) == Number(roomsQuantity)) {
                    return item
                }
            });

        throw new BadRequestException()
    }
}
