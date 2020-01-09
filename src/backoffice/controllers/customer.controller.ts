import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.models';
import { ValidationPipe } from './../validation/validation';
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return new Result(null, true, {}, null);
  }

  @Post()
  post(@Body(new ValidationPipe()) customer: Customer) {
    return new Result('Cliente criado com sucesso', true, customer, null);
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new Result('Cliente atualizado com sucesso', true, body, null);
  }

  @Delete()
  delete(@Body() body) {
    return 'delete clientes';
  }
}
