import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisteDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 50)
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter good email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  readonly password: string;
}
