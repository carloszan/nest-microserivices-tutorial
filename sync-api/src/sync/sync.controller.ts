import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('sync')
export class SyncController {
  @MessagePattern({ cmd: 'syncMessage' })
  handleSyncMessage(payload: { message: string }) {
    return `${payload.message}, Carlos`;
  }
}
