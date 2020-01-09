import { Pet } from './pet.model';
import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';
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
  public password: string;
  public active: boolean;
  public pets: Pet[];
  public billingAddress: Address;
  public shippingAddress: Address;
  public creditCard: CreditCard;

  constructor(
    name: string,
    document: string,
    email: string,
    password: string,
    active: boolean,
    pets: Pet[],
    billingAddress: Address,
    shippingAddress: Address,
    creditCard: CreditCard,
  ) {
    this.name = name;
    this.document = document;
    this.email = email;
    this.password = password;
    this.active = active;
    this.pets = pets;
    this.billingAddress = billingAddress;
    this.shippingAddress = shippingAddress;
    this.creditCard = creditCard;
  }
}
