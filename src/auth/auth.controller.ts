import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisteDto } from './dto/register.dt';
import { LoginDto } from './dto/login.dto';
import { Session } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @Redirect('/auth/login')
  register(@Body() registerDto: RegisteDto) {
    return this.authService.register(registerDto);
  }

  @Get('register')
  @Render('signup')
  sigin() {
    return {
      resul: 'ok',
    };
  }

  @Get('/login')
  @Render('signin')
  log() {
    return {
      resul: 'ok',
    };
  }

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
    @Session() session: Record<string, any>,
    @Res() res: Response,
  ) {
    const log = await this.authService.login(loginDto);
    session.user = log;
    session.conneted = true;
    // return log;
    res.redirect('/home');
  }

  @Get('/logout')
  logout(@Session() session: Record<string, any>, @Res() res: Response) {
    session.destroy((err) => {
      return err;
    });
    res.redirect('/');
  }
}
