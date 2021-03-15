import { Module } from '@nestjs/common'
 import { ConsoleModule } from 'nestjs-console'
 import { AppService } from './app.service'
 import { AppController } from './app.controller'

 @Module({
   controllers: [AppController],
   imports: [ConsoleModule],
   providers: [AppService],
   exports: [AppService]
 })
 export class AppModule {}