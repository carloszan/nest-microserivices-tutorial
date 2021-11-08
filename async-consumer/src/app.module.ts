import { Module } from '@nestjs/common';
import { AsyncModule } from './async/async.module';

@Module({
  imports: [AsyncModule],
})
export class AppModule {}
