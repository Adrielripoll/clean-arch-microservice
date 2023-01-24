import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose'

export type coordinatesDocument = HydratedDocument<Coordinates>

@Schema()
export class Coordinates {
    @Prop({ required: true, type: Number })
    latitude: number

    @Prop({ required: true, type: Number })
    longitude: number
}

export const coordinatesSchema = SchemaFactory.createForClass(Coordinates)