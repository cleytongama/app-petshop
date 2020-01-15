import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Result } from '../models/result.models';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length) {
      // throw new BadRequestException(this.transformErrosHandleMessage(errors));
      throw new HttpException(
        new Result(
          'Ops, algo saiu errado',
          false,
          null,
          this.transformErrosHandleMessage(errors),
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }

  private transformErrosHandleMessage(errors) {
    return errors.map(item => {
      const { property, constraints = {}, children = {} } = JSON.parse(
        JSON.stringify(item),
      );

      return {
        property,
        constraints: children
          ? Object.assign(constraints, ...children)
          : constraints,
      };
    });
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
