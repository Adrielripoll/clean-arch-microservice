import { Body, Controller, Get, Inject, Post } from '@nestjs/common'
import { CreateLocation } from '@domain/use-cases/create-location'
import { CreateNotificationRequest } from '@domain/use-cases/create-location'

@Controller()
export class LocationController {

    constructor(
        private createLocation: CreateLocation
    ){}
    
    @Post()
    async save(@Body() request: CreateNotificationRequest){
        return this.createLocation.execute(request)
    }
}