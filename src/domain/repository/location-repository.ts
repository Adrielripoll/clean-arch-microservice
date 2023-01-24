import { Location } from '../entities/Location'

export abstract class LocationRepository {
    abstract save(location: Location): Promise<void>
}