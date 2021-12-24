import { Injectable } from '@nestjs/common';
import {Todo} from "@test-nx/model";


@Injectable()
export class AppService {
  getData(): Array<Todo>{
    return [{
      name: 'First Todo',
      isDone: false,
    }];
  }
}
