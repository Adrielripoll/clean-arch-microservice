import { LocationRepository } from "@domain/repository/location-repository";
import { LocationDocument } from "../models/location";
import { ILocation } from "@domain/entities/interfaces/location";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MongoLocationRepository implements LocationRepository {
    
    constructor(@InjectModel('location') private locationModel: Model<LocationDocument>){}
    
    async save(location: ILocation){
        await this.locationModel.create(location)
    }
}