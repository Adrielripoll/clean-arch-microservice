import { Location } from "./Location"
import { Coordinates } from "./Coordinates"


describe('Create location', () => {
    it('should create a location', () => {
        const coordinates = new Coordinates({
            longitude: -40.12441,
            latitude: 84.12344
        })

        const location = new Location({
            address: 'rua x',
            coordinates,
            freightMatchId: Math.floor(Math.random() * 15),
            createdAt: new Date()
        })
        expect(location).toBeTruthy()
    })
})