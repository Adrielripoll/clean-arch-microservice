import { Module } from "@nestjs/common";
import { LocationController } from "./kafka/controllers/location.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";
import { CreateLocation } from "@application/use-cases/create-location";
import { DatabaseModule } from "@infra/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [LocationController],
    providers: [KafkaConsumerService, CreateLocation]
})
export class MessagingModule {}