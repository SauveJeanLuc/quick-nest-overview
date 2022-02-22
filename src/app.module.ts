import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

@Module({
  imports: [],
  controllers: [AppController, TokenController],
  providers: [AppService, TokenService],
})
export class AppModule {}
