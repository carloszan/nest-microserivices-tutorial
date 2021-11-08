import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import GatewayController from './gateway.controller';

@Module({
  controllers: [GatewayController],
  imports: [
    ClientsModule.register([
      {
        name: 'SYNC_API',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'api-gateway-sync-api',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'ASYNC_CONSUMER',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'api-gateway-async-consumer',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class GatewayModule {}
