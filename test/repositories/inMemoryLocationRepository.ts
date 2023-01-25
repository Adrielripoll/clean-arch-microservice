import { Location } from "@domain/entities/Location";
import { LocationRepository } from "@domain/repository/location-repository";

export class InMemoryLocationRepository implements LocationRepository {
    
    public location: Location[] = []

    async save(location: Location) {
        this.location.push(location)
    }

    async listById(freightMatchId: number): Promise<Location[]> {
        return this.location.filter((item) => item.freightMatchId == freightMatchId)
    }
}