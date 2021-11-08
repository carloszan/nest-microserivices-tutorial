import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('async')
export class AsyncController {
  @EventPattern({ cmd: 'asyncMessage' })
  handleAsyncMessage(payload: { message: string }) {
    console.log(payload.message);
  }
}
