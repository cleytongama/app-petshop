import { Pet } from './pet.model';
import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { User } from './user.model';
export class Customer {
  @MinLength(2, {
    message: 'Nome precisa de um tamanho máximo de 2 caracters',
  })
  @IsString({
    message: 'Nome precisa ser string',
  })
  public name: string;
  @IsNotEmpty({
    message: 'Documento não pode ser vazio',
  })
  @MaxLength(11, {
    message: 'Documento deve conter 11 caracteres',
  })
  public document: string;
  public email: string;
  public pets: Pet[];

  @ValidateNested({ each: true })
  @Type(() => Address)
  public billingAddress: Address;

  @ValidateNested()
  public shippingAddress: Address;

  public creditCard: CreditCard;

  public user: User;

  constructor(
    name: string,
    document: string,
    email: string,
    pets: Pet[],
    billingAddress: Address,
    shippingAddress: Address,
    creditCard: CreditCard,
    user: User,
  ) {}
}
