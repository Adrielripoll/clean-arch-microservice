import { Coordinates } from "@domain/entities/Coordinates"
import { Location } from "@domain/domain/entities/Location"
import { InMemoryLocationRepository } from "@test/repositories/inMemoryLocationRepository"

describe('Location list', () => {
    it('should be return location list by freight match id', async () => {
        const inMemoryLocationRepository = new InMemoryLocationRepository()
        
        const coordinates = new Coordinates({
            latitude: -30.0082297,
            longitude: -51.1854009
        })

        inMemoryLocationRepository.save(new Location({
            coordinates,
            address: 'rua x',
            freightMatchId: 1,
            createdAt: new Date()
        }))

        inMemoryLocationRepository.save(new Location({
            coordinates,
            address: 'rua x',
            freightMatchId: 1,
            createdAt: new Date()
        }))

        inMemoryLocationRepository.save(new Location({
            coordinates,
            address: 'rua x',
            freightMatchId: 2,
            createdAt: new Date()
        }))

        const locations = await inMemoryLocationRepository.listById(1)

        expect(locations).toHaveLength(2)
        expect(locations).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ freightMatchId: 1}),
                expect.objectContaining({ freightMatchId: 1})
            ])
        )

    })
})