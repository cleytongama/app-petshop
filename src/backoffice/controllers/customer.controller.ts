import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Customer } from '../models/model.customer';
import { Result } from '../models/result.models';

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
  post(@Body() body: Customer) {
    return new Result('Cliente criado com sucesso', true, body, null);
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
