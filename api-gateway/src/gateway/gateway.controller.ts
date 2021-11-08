import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export default class GatewayController {
  constructor(
    @Inject('SYNC_API') private readonly clientSync: ClientProxy,
    @Inject('ASYNC_CONSUMER') private readonly clientAsync: ClientProxy,
  ) {}

  @Get('sync')
  sendSyncMessage() {
    const pattern = { cmd: 'syncMessage' };
    return this.clientSync.send(pattern, { message: 'Hello world' });
  }

  @Get('async')
  sendAsyncMessage() {
    const pattern = { cmd: 'asyncMessage' };
    return this.clientAsync.emit(pattern, {
      message: 'Hello world from async consumer',
    });
  }
}
