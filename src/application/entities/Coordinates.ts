import { ICoordinates } from './interfaces/coordinates'

export class Coordinates {
    private props: ICoordinates

    constructor(props: ICoordinates){
        this.props = props
    }

    public get latitude(){
        return this.props.latitude
    }

    public set latitude(latitude: number){
        this.props.latitude = latitude
    }

    public get longitude(){
        return this.props.longitude
    }

    public set longitude(longitude: number){
        this.props.longitude = longitude
    }
}