import { LocationRepository } from "@domain/repository/location-repository";
import { Location } from "@domain/entities/Location";

export class LocationList {
    
    constructor(private locationRepository: LocationRepository){}
    
    async execute(freightMatchId: number): Promise<Location[]>{
        return this.locationRepository.listById(freightMatchId)
    }
}