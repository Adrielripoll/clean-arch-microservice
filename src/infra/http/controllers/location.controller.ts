import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateLocation } from 'src/application/use-cases/create-location'
import { CreateNotificationRequest } from 'src/application/use-cases/create-location'
import { LocationList } from 'src/application/use-cases/location-list'

@Controller('locations')
export class LocationController {

    constructor(
        private createLocation: CreateLocation,
        private locationList: LocationList
    ){}

    @Get('hello')
    async hello(){
        return 'hello world'
    }
    
    @Post()
    async save(@Body() request: CreateNotificationRequest){
        return this.createLocation.execute(request)
    }

    @Get(':id')
    async listById(@Param('id') id: number){
        return this.locationList.execute(id)
    }
}