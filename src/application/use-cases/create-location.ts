import { Injectable } from "@nestjs/common";
import { LocationRepository } from "../repository/location-repository";
import { Coordinates } from "../entities/Coordinates";
import { Location } from "../entities/Location";
import { reverseGeocoding } from "src/infra/external/reverse-geocoding";

export interface CreateLocationRequest {
    freightMatchId: number
    latitude: number
    longitude: number
}

@Injectable()
export class CreateLocation {
    constructor(private readonly locationRepository: LocationRepository){}

    async execute(request: CreateLocationRequest){
        const { freightMatchId, latitude, longitude } = request

        const coordinates = new Coordinates({latitude, longitude})

        const address = await reverseGeocoding(coordinates)

        const location = new Location({
            address,
            coordinates,
            freightMatchId
        })

        await this.locationRepository.save(location)
    }
}