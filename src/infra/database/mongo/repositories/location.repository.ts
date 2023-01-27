import { LocationRepository } from "src/application/repository/location-repository";
import { LocationDocument } from "../models/location";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Location } from "@application/entities/Location";
import { LocationMapper } from "../mappers/location-mapper";

@Injectable()
export class MongoLocationRepository implements LocationRepository {
    
    constructor(@InjectModel('location') private locationModel: Model<LocationDocument>){}
    
    async save(location: Location){
        await this.locationModel.create(LocationMapper.toDatabase(location))
    }

    async listById(freightMatchId: number): Promise<Location[]> {
        const locations = await this.locationModel.find({ freightMatchId })

        return locations.map(LocationMapper.toDomain)
    }
}