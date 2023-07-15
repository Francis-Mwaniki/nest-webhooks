import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService,
  ) {}

  @Post()
  createOrder(@Body() data: any) {
    const createdOrder = this.appService.createOrder(data);
    this.httpService.post('orders', data).subscribe({
      complete: () => {
        console.log('completed', data);
      },
      error: (err) => {
        // you can handle error requests here
        console.log(err);
      },
    });

    return createdOrder;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('orders')
  getOrders() {
    const data = this.httpService.get(
      'https://84bc-102-68-79-143.ngrok.io/orders',
    );
    console.log(data);
    return data;
  }
  @Post('orders')
  getOrder() {
    const data = this.httpService.get(
      'https://84bc-102-68-79-143.ngrok.io/orders',
    );
    console.log(data);
    return data;
  }
  handleWebhook(@Body() payload: any) {
    // ...

    // Example: Make an external API request using the HttpService
    this.httpService
      .post('https://84bc-102-68-79-143.ngrok.io/orders', {})
      .subscribe({
        complete: () => {
          console.log('completed', payload);
        },
        error: (err) => {
          // you can handle error requests here
          console.log(err);
        },
      });

    // ...
  }
}
