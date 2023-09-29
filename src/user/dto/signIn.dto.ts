import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    username: string;
    password: string
}