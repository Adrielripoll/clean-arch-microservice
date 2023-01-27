import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor(){
        super({
            client: {
                brokers: ['localhost: 9092']
            }
        })
    }

    async onModuleDestroy(){
        await this.close()
    }
}   