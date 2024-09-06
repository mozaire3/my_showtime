import { AuthService } from './auth.service';
import { RegisteDto } from './dto/register.dt';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisteDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user_schemas").User_auth> & import("./schemas/user_schemas").User_auth & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    sigin(): {
        resul: string;
    };
    log(): {
        resul: string;
    };
    login(loginDto: LoginDto, session: Record<string, any>, res: Response): Promise<void>;
    logout(session: Record<string, any>, res: Response): void;
}
