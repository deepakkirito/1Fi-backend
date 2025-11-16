import { Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post()
  login() {
    return this.loginService.login();
  }
}
