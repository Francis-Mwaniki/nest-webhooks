import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createOrder(data) {
    // we omit the implementation of order creation
    return data;
  }

  getHello(): string {
    return 'Hello World!';
  }

  getOrders() {
    return 'Hello World!';
  }
}
