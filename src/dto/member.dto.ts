import { IsNotEmpty, IsEmail } from 'class-validator';
import { Prop, Schema } from "@nestjs/mongoose";


export class memberDto {
    @Prop()
    @IsNotEmpty()
    firstName: string;

    @Prop()
    @IsNotEmpty()
    lastName: string;

    @Prop()
    middleName: string;

    @Prop()
    gender: string;

    @Prop()
    age: number;

    @Prop()
    phoneNo: string;

    @IsEmail()
    @Prop()
    email: string;
}