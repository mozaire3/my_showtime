import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ unique: [true, 'Duplicate email '] })
  email: string;

  @Prop()
  password: string;

  @Prop({})
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
