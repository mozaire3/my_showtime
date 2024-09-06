import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User_auth } from './schemas/user_schemas';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisteDto } from './dto/register.dt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User_auth.name) private user_authModel: Model<User_auth>,
    private jwtService: JwtService,
  ) {}

  async register(registeDto: RegisteDto) {
    const { name, email, password } = registeDto;

    const hashpassword = await bcrypt.hash(password, 10);
    const user_email = await this.user_authModel.findOne({ email });
    if (user_email) {
      throw new UnauthorizedException('Invalid email!Email existed');
    } else {
      const user = await this.user_authModel.create({
        name,
        email,
        password: hashpassword,
        role: null,
      });
      return user;
    }

    // const token = this.jwtService.sign({id:user._id})
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.user_authModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }

  async findAll(): Promise<User_auth[]> {
    return await this.user_authModel.find().exec();
  }

  async findone(id): Promise<User_auth> {
    const res = await this.user_authModel.findById(id).exec();
    if (!res) {
      throw new NotFoundException('Book not found');
    }
    return res;
  }

  async update(id: string, user): Promise<User_auth> {
    return await this.user_authModel.findByIdAndUpdate(id, user).exec();
  }

  async delete(id): Promise<User_auth> {
    return await this.user_authModel.findByIdAndDelete(id).exec();
  }

}
