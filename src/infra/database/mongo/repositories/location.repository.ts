import { LocationRepository } from "@domain/repository/location-repository";
import { LocationDocument } from "../models/location";
import { ILocation } from "@domain/entities/interfaces/location";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Location } from "@domain/entities/Location";

@Injectable()
export class MongoLocationRepository implements LocationRepository {
    
    constructor(@InjectModel('location') private locationModel: Model<LocationDocument>){}
    
    async save(location: ILocation){
        await this.locationModel.create(location)
    }

    async listById(freightMatchId: number): Promise<Location[]> {
        return await this.locationModel.find({ freightMatchId })
    }
}