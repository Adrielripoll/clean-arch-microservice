import { randomUUID } from 'crypto'
import { Coordinates } from './Coordinates'
import { ILocation } from './interfaces/location'


export class Location {
    private _id: string
    private props: ILocation

    constructor(props: ILocation){
        this._id = randomUUID()
        this.props = {...props, createdAt: new Date()}
    }

    public get id() {
        return this._id
    }

    public get freightMatchId(){
        return this.props.freightMatchId
    }

    public set freigthMatchId(freightMatchId: number){
        this.props.freightMatchId = freightMatchId
    }

    public get coordinates(){
        return this.props.coordinates
    }

    public set coordinates(coordinates: Coordinates){
        this.props.coordinates = coordinates
    }

    public get address(): string{
        return this.props.address
    }

    public set address(address: string){
        this.props.address = address
    }

    public get createdAt(){
        return this.props.createdAt
    }
}