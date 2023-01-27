import { LocationRepository } from '@application/repository/location-repository'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongoLocationRepository } from './mongo/repositories/location.repository'
import { models } from './mongo/models/models'

@Module({
    imports: [MongooseModule.forRoot('mongodb://192.168.1.6:27017', {user: 'root', pass: '1234', dbName: 'locations'}), MongooseModule.forFeature(models)],
    providers: [{
        provide: LocationRepository,
        useClass: MongoLocationRepository
    }],
    exports: [LocationRepository]
})
export class DatabaseModule {}