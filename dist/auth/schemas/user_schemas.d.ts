export declare class User_auth {
    name: string;
    email: string;
    password: string;
    role: string;
}
export declare const User_authShema: import("mongoose").Schema<User_auth, import("mongoose").Model<User_auth, any, any, any, import("mongoose").Document<unknown, any, User_auth> & User_auth & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User_auth, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User_auth>> & import("mongoose").FlatRecord<User_auth> & {
    _id: import("mongoose").Types.ObjectId;
}>;
