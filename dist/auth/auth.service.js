"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schemas_1 = require("./schemas/user_schemas");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(user_authModel, jwtService) {
        this.user_authModel = user_authModel;
        this.jwtService = jwtService;
    }
    async register(registeDto) {
        const { name, email, password } = registeDto;
        const hashpassword = await bcrypt.hash(password, 10);
        const user_email = await this.user_authModel.findOne({ email });
        if (user_email) {
            throw new common_1.UnauthorizedException('Invalid email!Email existed');
        }
        else {
            const user = await this.user_authModel.create({
                name,
                email,
                password: hashpassword,
                role: null,
            });
            return user;
        }
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.user_authModel.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        return user;
    }
    async findAll() {
        return await this.user_authModel.find().exec();
    }
    async findone(id) {
        const res = await this.user_authModel.findById(id).exec();
        if (!res) {
            throw new common_1.NotFoundException('Book not found');
        }
        return res;
    }
    async update(id, user) {
        return await this.user_authModel.findByIdAndUpdate(id, user).exec();
    }
    async delete(id) {
        return await this.user_authModel.findByIdAndDelete(id).exec();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schemas_1.User_auth.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map