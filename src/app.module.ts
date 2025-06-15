import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';



@Module({
    imports: [ 
        MongooseModule.forRoot('mongodb://localhost/topicos'),
        UserModule,
        AuthModule
    ],
  controllers: [AppController],
  providers: [AppService]
  
})
export class AppModule {}