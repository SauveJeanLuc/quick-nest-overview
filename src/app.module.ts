import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenController } from './token.controller';
import { TokenModule } from './token.module';
import { TokenService } from './token.service';

@Module({
  imports: [TokenModule],
  controllers: [AppController, TokenController],
  providers: [AppService, TokenService],
})
export class AppModule {}
