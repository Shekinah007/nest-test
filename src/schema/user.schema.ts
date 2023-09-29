import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    // @Prop({ required: true })
    name: string;

    @Prop()
    username: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const CatSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    color: String,

})


export class Cat {
    @Prop({ required: true })
    name: string;

    @Prop()
    breed: string;

    @Prop()
    age: number;

    @Prop()
    color: string;
}
