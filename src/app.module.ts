import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
//import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config, databaseConfig] }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
