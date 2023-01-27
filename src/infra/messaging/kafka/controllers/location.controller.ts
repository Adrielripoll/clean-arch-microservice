import { CreateLocation } from "@application/use-cases/create-location";
import { EventPattern, Payload } from "@nestjs/microservices";
import { Controller } from "@nestjs/common";
import { CreateLocationRequest } from '@application/use-cases/create-location'

interface CreateLocationPayload extends CreateLocationRequest {}

@Controller()
export class LocationController {
    constructor(
        private createLocation: CreateLocation
    ){}

    @EventPattern('locations.create-location')
    async create(@Payload() content: CreateLocationPayload){
        await this.createLocation.execute(content)
    }
}