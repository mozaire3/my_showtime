import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UserService {
  constructor(private readonly authService: AuthService) {}

  create(createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  async findAll() {
    return await this.authService.findAll();
  }

  async findOne(id: string) {
    return await this.authService.findone(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.authService.update(id, updateUserDto);
  }

  async delete(id) {
    return await this.authService.delete(id);
  }
}
