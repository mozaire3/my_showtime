import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter good email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  readonly password: string;
}
