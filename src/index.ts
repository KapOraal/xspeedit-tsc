import { BootstrapConsole } from 'nestjs-console'
 import { AppModule } from './app.module'
 import { Logger } from '@nestjs/common'

 const bootstrap = new BootstrapConsole({
   module: AppModule,
   useDecorators: true
 })
 bootstrap.init().then(async app => {
   try {
     await app.init()
     await bootstrap.boot()
     process.exit(0)
   } catch (e) {
     Logger.error(e)
     process.exit(1)
   }
 })