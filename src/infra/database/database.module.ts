import { LocationRepository } from '@domain/repository/location-repository'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongoLocationRepository } from './mongo/repositories/location.repository'
import { models } from './mongo/models/models'

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/locations'), MongooseModule.forFeature(models)],
    providers: [{
        provide: LocationRepository,
        useClass: MongoLocationRepository
    }],
    exports: [LocationRepository]
})
export class DatabaseModule {}