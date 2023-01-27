import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor(){
        super({
            client: {
                brokers: ['192.168.1.6:9092']
            }
        })
    }

    async onModuleDestroy(){
        await this.close()
    }
}   