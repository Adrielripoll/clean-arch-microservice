import { Coordinates } from "./Coordinates"

describe('create coordinates', () => {
    it('should create coordinates', () => {
        const coordinates = new Coordinates({
            longitude: -40.12441,
            latitude: 84.12344
        })
        expect(coordinates).toBeTruthy()
    })
})