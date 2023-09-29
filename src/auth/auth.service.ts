import { Injectable, UnauthorizedException } from '@nestjs/common';
import { registerDto } from 'src/user/dto/register.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async signIn(username: string, pass: string) {
        const user = await this.userService.getUserByUsername(username);
        console.log(user.password)

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;

        console.log("Logged In Successfully!");
        return result;

    }
}
