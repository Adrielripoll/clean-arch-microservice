import { Coordinates } from "../entities/Coordinates"
import { InMemoryLocationRepository } from "@test/repositories/inMemoryLocationRepository"
import { Location } from '../entities/Location'

describe('Create location', () => {
    it('should be able to save a location in database', async () => {
        const inMemoryDatabase = new InMemoryLocationRepository()

        const coordinates = new Coordinates({
            latitude: -30.0082297,
            longitude: -51.1854009
        })

        const location = new Location({
            coordinates,
            address: 'rua x',
            freightMatchId: 1,
            createdAt: new Date()
        })

        await inMemoryDatabase.save(location)
        expect(inMemoryDatabase.location).toHaveLength(1)
    })
})