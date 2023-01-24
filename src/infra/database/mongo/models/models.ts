import { locationSchema as Location } from './location'
import { coordinatesSchema as Coordinates} from './coordinates'

interface IModel {
    name: string,
    schema: any
}

export const models: IModel[] = [
    { name: 'location', schema: Location },
    { name: 'coordinates', schema: Coordinates }
]