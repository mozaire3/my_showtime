import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User_auth {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: [true, 'Duplicate email '] })
  email: string;

  @Prop()
  password: string;

  @Prop({})
  role: string;
}

export const User_authShema = SchemaFactory.createForClass(User_auth);
