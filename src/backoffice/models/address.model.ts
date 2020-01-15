import { IsString, MaxLength } from 'class-validator';
export class Address {
  @IsString({
    message: 'Rua precisa ser string',
  })
  public zipCode: string;

  @MaxLength(11, {
    message: 'Documento deve conter 11 caracteres',
  })
  @IsString({
    message: 'Rua precisa ser string',
  })
  public street: string;
  public number: string;
  public complement: string;
  public neighborhood: string;
  public city: string;
  public state: string;
  constructor(zipCode, street, number, complement, neighborhood, city, state) {}
}
