import { Coordinates } from "../Coordinates"

export interface ILocation {
    freightMatchId: number
    coordinates: Coordinates
    address: string
    createdAt?: Date
}