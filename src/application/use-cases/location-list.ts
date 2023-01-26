import { LocationRepository } from "src/application/repository/location-repository";
import { Location } from "@domain/domain/entities/Location";

export class LocationList {
    
    constructor(private locationRepository: LocationRepository){}
    
    async execute(freightMatchId: number): Promise<Location[]>{
        return this.locationRepository.listById(freightMatchId)
    }
}