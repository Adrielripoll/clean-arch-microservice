import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@infra/http/http.module';

@Module({
  imports: [ HttpModule, ConfigModule.forRoot() ],
})
export class AppModule {}
