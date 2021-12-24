import {Controller, Get, Logger} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    Logger.log(
      `🚀 Hello`
    );
    return this.appService.getData();
  }
}
