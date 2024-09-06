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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_authShema = exports.User_auth = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let User_auth = class User_auth {
};
exports.User_auth = User_auth;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User_auth.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: [true, 'Duplicate email '] }),
    __metadata("design:type", String)
], User_auth.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_auth.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    __metadata("design:type", String)
], User_auth.prototype, "role", void 0);
exports.User_auth = User_auth = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], User_auth);
exports.User_authShema = mongoose_1.SchemaFactory.createForClass(User_auth);
//# sourceMappingURL=user_schemas.js.map