import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString, IsEmail, IsNotEmpty } from "class-validator";
import { memberDto } from "src/dto/member.dto";


@Schema()
export class Member {
    @Prop({ required: true })
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    @IsString()
    middleName: string;

    @Prop()
    gender: string;

    @Prop()
    age: number;

    @Prop()
    @IsNotEmpty()
    phoneNo: string;

    @Prop()
    email: string;
}


export const MemberSchema = SchemaFactory.createForClass(Member)


