import { Module } from '@nestjs/common'
import { LocationController } from './controllers/location.controller';
import { CreateLocation } from '@domain/use-cases/create-location';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [LocationController],
    providers: [CreateLocation]
})
export class HttpModule {}

