import { Coordinates } from "@application/entities/Coordinates"
import { Location as RawLocation} from "../models/location"
import { Location } from '@application/entities/Location'

export class LocationMapper {
    static toDomain(location: RawLocation){
        return new Location({
            address: location.address,
            coordinates: new Coordinates(location.coordinates),
            freightMatchId: location.freightMatchId,
            createdAt: location.createdAt
        })
    }
}