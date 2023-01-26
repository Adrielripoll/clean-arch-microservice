import { Module } from '@nestjs/common'
import { LocationController } from './controllers/location.controller';
import { CreateLocation } from 'src/application/use-cases/create-location';
import { DatabaseModule } from '@infra/database/database.module';
import { LocationList } from 'src/application/use-cases/location-list';

@Module({
    imports: [DatabaseModule],
    controllers: [LocationController],
    providers: [CreateLocation, LocationList]
})
export class HttpModule {}

