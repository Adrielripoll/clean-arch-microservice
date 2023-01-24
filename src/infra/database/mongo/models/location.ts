import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose'
import { Coordinates } from './coordinates';

export type LocationDocument = HydratedDocument<Location>

@Schema()
export class Location {
    @Prop({ required: true, type: String })
    _id: string

    @Prop({ required: true, type: Number })
    freightMatchId: number

    @Prop({ required: true, type: Coordinates })
    coordinates: Coordinates

    @Prop({ required: true, type: String })
    address: string

    @Prop({ required: true, type: Date })
    createdAt: Date
}

export const locationSchema = SchemaFactory.createForClass(Location)