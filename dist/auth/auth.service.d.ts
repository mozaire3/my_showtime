import { User_auth } from './schemas/user_schemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { RegisteDto } from './dto/register.dt';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private user_authModel;
    private jwtService;
    constructor(user_authModel: Model<User_auth>, jwtService: JwtService);
    register(registeDto: RegisteDto): Promise<import("mongoose").Document<unknown, {}, User_auth> & User_auth & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    login(loginDto: LoginDto): Promise<import("mongoose").Document<unknown, {}, User_auth> & User_auth & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<User_auth[]>;
    findone(id: any): Promise<User_auth>;
    update(id: string, user: any): Promise<User_auth>;
    delete(id: any): Promise<User_auth>;
}
