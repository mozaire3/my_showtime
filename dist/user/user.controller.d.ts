import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../auth/schemas/user_schemas").User_auth> & import("../auth/schemas/user_schemas").User_auth & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<import("../auth/schemas/user_schemas").User_auth[]>;
    findOne(id: string): Promise<import("../auth/schemas/user_schemas").User_auth>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("../auth/schemas/user_schemas").User_auth>;
    remove(id: string): Promise<import("../auth/schemas/user_schemas").User_auth>;
}
